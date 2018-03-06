'use strict';

var Client  = require('node-rest-client').Client;
var logger = require('winston');

module.exports = class openkmClient {

   // constructor
   constructor(hostandport, user, password,isHttps = false) {
       this.openkmHost = hostandport
       this.openkmUser = user
       this.openkmPwd = password

       this.protocal = 'http://'
       if(isHttps){
         this.protocal = 'https://'
       }

       var options_auth = { user: user, password: password };

       var args = {
         headers: { "Content-Type": "application/json","Accept":"application/json" }
       }

       this.client = new Client(options_auth);

       logger.configure({
            transports: [
              new (logger.transports.File)({ filename: 'openkmclient.log',level: 'debug' })
            ]
          });

     logger.log('debug',isHttps)
   }

   addDocument(docName) {
   //   # Add file
   //  curl -u okmAdmin:admin -H "Accept: application/json" \
   // -X POST -F docPath=/okm:root/newDoc.txt -F content=@newDoc.txt \
   // http://159.89.185.142:8080/OpenKM/services/rest/document/createSimple
   var url = this.protocal+this.openkmHost+"/OpenKM/services/rest/document/createSimple"
       logger.log("openkmClient " + docName);
   }

   addFolder(folderName) {
   //   # Create a folder
   //  $ curl -u okmAdmin:admin -H "Accept: application/json" \
   // -X POST -H "Content-Type: application/json" -d '/okm:root/newfolder' \
   // http://localhost:8080/OpenKM/services/rest/folder/createSimple
       var url = this.protocal+this.openkmHost+"/OpenKM/services/rest/folder/createSimple"
       var data = ""
       var localArgs.push(this.args)
       localArgs.push(data)
       this.client.post(url, localArgs, function (data, response) {
            // parsed response body as js object
            console.log(data);
            // raw response
            console.log(response);
        });
       logger.log("openkmClient " + folderName);
   }

   getDocumentByName(docName) {
       this.logger.log("openkmClient " + docName);
   }

   getDocumentById(docId) {
   //   # get File
   // curl -u web:web \
   // http://159.89.185.142:8080/OpenKM/services/rest/document/getContent?docId=303944b5-5b35-4b7a-a44e-a74bffe54df3
       logger.log("openkmClient " + docId);
   }

   listFilesByFolderName(folderName) {
       logger.log("openkmClient " + folderName);
   }

   listFilesByFolderId(folderId) {
     logger.debug('listFilesByFolderId')
   //   # list files in folder
   // curl -u okmAdmin:admin -H "Accept: application/json" \
   // http://localhost:8080/OpenKM/services/rest/folder/getChildren?fldId=3492d662-b58e-417c-85b6-930ad0c6c3cf
    var url = this.protocal+this.openkmHost+"/OpenKM/services/rest/document/getChildren?fldId="+folderId
       logger.info("openkmClient " + folderId);
       this.client.get(url, this.args, function (data, response) {
           // parsed response body as js object
           logger.log('debug',data)
           // raw response
           console.log(response.statusCode);
           logger.log('info','statuscode: '+response.statusCode)
           return JSON.stringify(data);
       });
   }


   test() {
     logger.debug('Get list of files from folder')

     logger.log('debug','args: '+ args)
  //   var url = "https://"+this.openkmHost+"/OpenKM/services/rest/folder/getChildren?fldId=9e2f1775-f41f-46fb-8222-e21efad9abba"
     var url = this.protocal+this.openkmHost+"/OpenKM/services/rest/document/getChildren?fldId=cf0c25ff-14d7-4c3f-b96e-be313e9f6991"
     logger.log('debug',url)
     this.client.get(url, this.args, function (data, response) {
         // parsed response body as js object
         logger.log('debug',data)
         // raw response
         console.log(response.statusCode);
         logger.log('info','statuscode: '+response.statusCode)
         return JSON.stringify(data);
     });
   }
}
