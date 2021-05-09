({
	doInit : function(component, event, helper) {
        helper.onLoadGetSobjectHelper(component, event, helper); 
    },
    handleSortSearchEvent: function(component, event, helper) {
        var SearchKeyword = event.getParam('searchKeyword');
        helper.handleSearchEvent(component, event, SearchKeyword); 
    },
})