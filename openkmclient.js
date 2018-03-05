'use strict';
var Client = require('node-rest-client').Client;

module.exports = class openkmClient {

   constructor(hostandport, user, password) {
       this.openkmHost = hostandport
       this.openkmUser = user
       this.openkmPwd = password

       var options_auth = { user: user, password: password };
       this.client = new Client(options_auth);
   }

   AddDocument(docName) {
   //   # Add file
   //  curl -u okmAdmin:admin -H "Accept: application/json" \
   // -X POST -F docPath=/okm:root/newDoc.txt -F content=@newDoc.txt \
   // http://159.89.185.142:8080/OpenKM/services/rest/document/createSimple
   var args = {
     headers: { "Content-Type": "application/json" }
   }
   var url = "http://"+this.openkmHost+"/OpenKM/services/rest/document/createSimple"
       console.log("openkmClient " + docName);
   }

   AddFolder(folderName) {
   //   # Create a folder
   //  $ curl -u okmAdmin:admin -H "Accept: application/json" \
   // -X POST -H "Content-Type: application/json" -d '/okm:root/newfolder' \
   // http://localhost:8080/OpenKM/services/rest/folder/createSimple
       console.log("openkmClient " + folderName);
   }

   getDocumentByName(docName) {
       console.log("openkmClient " + docName);
   }

   getDocumentById(docId) {
   //   # get File
   // curl -u web:web \
   // http://159.89.185.142:8080/OpenKM/services/rest/document/getContent?docId=303944b5-5b35-4b7a-a44e-a74bffe54df3
       console.log("openkmClient " + docId);
   }

   listFilesByName(folderName) {
       console.log("openkmClient " + folderName);
   }

   listFilesById(folderId) {
   //   # list files in folder
   // curl -u okmAdmin:admin -H "Accept: application/json" \
   // http://localhost:8080/OpenKM/services/rest/folder/getChildren?fldId=3492d662-b58e-417c-85b6-930ad0c6c3cf
   var url = "https://"+this.openkmHost+"OpenKM/services/rest/folder/getChildren?fldId=cf0c25ff-14d7-4c3f-b96e-be313e9f6991"
       console.log("openkmClient " + folderId);
       console.log()
   }


   test() {
     console.log('Get list of files from folder')
     var args = {
       headers: { "Content-Type": "application/json","Accept":"application/json" }
     }

     console.log('args: '+ args)
  //   var url = "https://"+this.openkmHost+"/OpenKM/services/rest/folder/getChildren?fldId=9e2f1775-f41f-46fb-8222-e21efad9abba"
     var url = "https://"+this.openkmHost+"/OpenKM/services/rest/document/getChildren?fldId=cf0c25ff-14d7-4c3f-b96e-be313e9f6991"
     console.log(url)
     this.client.get(url, args, function (data, response) {
         // parsed response body as js object
         console.log(data);
         // raw response
         console.log(response.statusCode);
     });
   }
}
