import { LightningElement,track } from 'lwc';
import createJA from '@salesforce/apex/CreateJobApplicaiton.createJA';
import jobapplication_Object from '@salesforce/schema/Job_Applications__c';
import status_field from '@salesforce/schema/Job_Applications__c.Status__c';
import position_name_field from '@salesforce/schema/Job_Applications__c.Position_Name__c';
import email_field from '@salesforce/schema/Job_Applications__c.Email_ID__c';
import candidate_number_field from '@salesforce/schema/Job_Applications__c.Candidate_Number__c';


export default class NewJobApplication extends LightningElement {

  
    
   
    
    @track status=  status_field;
    @track  positionName = position_name_field;
    @track email = email_field;
    @track candidateNumber = candidate_number_field; 
    
    statusOption=
     [{value: 'New', label:'New'},
    {value: 'On Hold', label: 'On Hold'},
    {value:'Accepted' , label:'Accepted'},
    {value: 'Rejected', label: 'Rejected'} ];
 
    rec={
        Status: this.status,
        Position: this.positionName,
        Email: this.email,
        CandidateNumber : this.candidateNumber
    }

   
    onStatusChange(event){
        this.value= event.detail.value;
    }



}