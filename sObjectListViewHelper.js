({
	onLoadGetSobjectHelper : function(component, event, helper) {
        var objectAPIName = component.get('v.objectAPIName');
        var fieldsList = component.get('v.fieldApiNameList');
		var action = component.get("c.fetchSobjectRows");
        action.setParams({
            'sObjectAPIName' : objectAPIName,
            'fieldsList' : fieldsList
        });
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
            	var result = response.getReturnValue();  
                console.log('data::'+ JSON.stringify(result));
                component.set('v.dataList', result);
                component.set('v.hasData', true);
            }else{
                let errors = response.getError();
                this.showMessage('Error', errors,'error');    
            }
        });
		$A.enqueueAction(action);
	},
    handleSearchEvent: function(component, event, SearchKeyword) {
        var objectAPIName = component.get('v.objectAPIName');
        var fieldsList = component.get('v.fieldApiNameList');
        var fieldsList = component.get('v.fieldApiNameList');
        
		var action = component.get("c.searchSobjectRows");
        action.setParams({
            'SearchKeyword' : SearchKeyword,
            'sObjectAPIName' : objectAPIName,
            'fieldsList' : fieldsList
        });
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
            	var result = response.getReturnValue();  
                console.log('search data::'+ JSON.stringify(result));
                component.set('v.dataList', result);
                component.set('v.hasData', true);
                this.sendFinalDataList(component,event,result);
            }else{
                let errors = response.getError();
                this.showMessage('Error', errors,'error');    
            }
        });
		$A.enqueueAction(action);
    },
    sendFinalDataList: function(component,event,res){
       var cmp = component.find('genCmp');  
       cmp.passFinalList(res);
    },
})