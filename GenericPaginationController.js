({
    doInit : function(component, event, helper) {
        helper.buildData(component, helper);
    },
    
    onNext : function(component, event, helper) {        
        var pageNumber = component.get("v.currentPageNumber");
        component.set("v.currentPageNumber", pageNumber+1);
        helper.buildData(component, helper);
    },
    
    onPrev : function(component, event, helper) {        
        var pageNumber = component.get("v.currentPageNumber");
        component.set("v.currentPageNumber", pageNumber-1);
        helper.buildData(component, helper);
    },
    
    processMe : function(component, event, helper) {
        component.set("v.currentPageNumber", parseInt(event.target.name));
        helper.buildData(component, helper);
    },
    
    onFirst : function(component, event, helper) {        
        component.set("v.currentPageNumber", 1);
        helper.buildData(component, helper);
    },
    
    onLast : function(component, event, helper) {        
        component.set("v.currentPageNumber", component.get("v.totalPages"));
        helper.buildData(component, helper);
    },
    
    displayFinalList: function(component, event, helper){
        helper.displayFinalList(component, event);
    },
    
    handleClick: function(component, event, helper){
        helper.handleClick(component, event);
    },
    handleChange: function(component, event, helper){
        helper.handleChange(component, event);
    },
    viewRecord : function(component,event,helper){
        var urlNav;
        var rec = event.getSource().get("v.name");
        if ((!$A.util.isUndefinedOrNull(rec.Id)) || (!$A.util.isEmpty(rec.Id))) 
        {  
            console.log('recId::'+rec.Id);
            var navEvt = $A.get("e.force:navigateToSObject");
            navEvt.setParams({
                "recordId": rec.Id,
                "slideDevName": "related"
            });
            navEvt.fire(); 
        }
    },
    
    
})