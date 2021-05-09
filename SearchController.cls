public class SearchController {
    
    @AuraEnabled 
    public static List<sObject> fetchSobjectRows(String sObjectAPIName, List<String> fieldsList){
        String fields = String.join(fieldsList, ',');
        String query = 'SELECT ' + fields + ' FROM '+ sObjectAPIName ;
        return Database.query(query);
    }
    
	@AuraEnabled 
    public static List<sObject> searchSobjectRows(String SearchKeyword, String sObjectAPIName, List<String> fieldsList){
        String fields = String.join(fieldsList, ',');
        String searchquery = 'FIND :SearchKeyword IN ALL FIELDS RETURNING ' + sObjectAPIName +'( ' + fields + ' ) ';
        List<List<SObject>> searchList = search.query(searchquery);
        return searchList[0];
    }
}