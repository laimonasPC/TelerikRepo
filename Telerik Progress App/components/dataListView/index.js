'use strict';

app.dataListView = kendo.observable({
    onShow: function() {}
});

// START_CUSTOM_CODE_dataListView
// END_CUSTOM_CODE_dataListView
(function(parent) {
    var dataProvider = app.data.telerikBackEndService,
        dataSourceOptions = {
            type: 'everlive',
            transport: {
                typeName: 'dbo_Bills',
                dataProvider: dataProvider
            },
            schema: {
                model: {
                    fields: {
                        'Description': {
                            field: 'Description',
                            defaultValue: ''
                        },
                        'Amount': {
                            field: 'Amount',
                            defaultValue: ''
                        },
                    }
                }
            },
        },
        dataSource = new kendo.data.DataSource(dataSourceOptions),
        dataListViewModel = kendo.observable({
            dataSource: dataSource,
            itemClick: function(e) {
                app.mobileApp.navigate('#components/dataListView/details.html?uid=' + e.dataItem.uid);
            },
            detailsShow: function(e) {
                var item = e.view.params.uid,
                    itemModel = dataSource.getByUid(item);
                if (!itemModel.Amount) {
                    itemModel.Amount = String.fromCharCode(160);
                }
                dataListViewModel.set('currentItem', itemModel);
            },
            currentItem: null
        });

    parent.set('dataListViewModel', dataListViewModel);
})(app.dataListView);