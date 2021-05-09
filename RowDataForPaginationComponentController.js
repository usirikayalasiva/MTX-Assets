({
	doInit : function(component, event, helper) {
		let obj = component.get('v.fieldData');
        let name = component.get('v.fieldName');
        // console.log('RowDataForPaginationComponentController: ',JSON.stringify(obj));
        // console.log('name: ',JSON.stringify(name));
        name = name.trim();
        var value = '';
        if(name == 'Unique Pariticipant/Legacy Id'){
            if((!$A.util.isUndefinedOrNull(obj.Unique_Participant_ID__c)) || (!$A.util.isEmpty(obj.Unique_Participant_ID__c))){
                value = obj.Unique_Participant_ID__c;
            }else{
                value = obj.Legacy_Contact_Id__c;
            }
        }else{
             value = obj[name];
        }
        
        if(value) {
            component.set('v.value', value);
        }
        else {
            component.set('v.value', '');
        }
	}
})