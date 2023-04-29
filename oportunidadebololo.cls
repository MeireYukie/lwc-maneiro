public with sharing class oportunidadebololo {

    @AuraEnabled(cacheable=true)

    public static List<Opportunity> getOppLwc(){
        return [SELECT Id, Name, Amount, StageName, CreatedDate 
                FROM Opportunity  
                ORDER BY CreatedDate DESC 
                LIMIT 5];

    }
}


