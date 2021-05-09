({
    
    
    /*
     * this function will build table data
     * based on current page selection
     * */
    buildData : function(component, helper) {
        var data = [];
        var pageNumber = component.get("v.currentPageNumber");
        var pageSize = component.get("v.pageSize");
        var allData = component.get("v.dataList");
        console.log('init allData::'+JSON.stringify(allData));
        var x = (pageNumber-1)*pageSize;
        var xyz = {"fieldname[i]":"value"}
        
        for(; x<(pageNumber)*pageSize; x++){//creating data-table data
            if(allData[x]){
                data.push(allData[x]);
            }
        }
        component.set("v.data", data);
        component.set("v.totalPages", Math.ceil(component.get("v.dataList").length/component.get("v.pageSize")));
	},
    handleClick: function(component, event, helper){
        var searchKey = component.get('v.searchKeyword');
        var evt= component.getEvent('sortingSearchingEvent');
        evt.setParams({
            searchKeyword: searchKey
        });
        if(searchKey){
            evt.fire();
        }
        else{
            console.log('---Event not fired---');
        }
	},
    
    displayFinalList: function(component, event, helper){
        var finalList = event.getParam('arguments');
        var listToDisplay = finalList.finalDataList;
        this.buildData(component, helper);
    },
    
    handleChange: function(component, event, helper){
        var fieldValue = component.get('v.searchKeyword');
        if(fieldValue == ''){
            $A.get('e.force:refreshView').fire();
        }
    }          
})