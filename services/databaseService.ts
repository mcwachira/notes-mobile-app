import {database} from "./appwrite";
const databaseService = {
    //List documents
 async fetchDocuments(dbId: string, colId:string, queries=[]): Promise<Document[]> {
     try{
         const response = await database.listDocuments(dbId, colId, queries);
         return {data:response.documents || [] , error:null}
     } catch(error){
         console.error("Error fetching documents:", error.message);
         return {error:error.message};
     }
 },


    //create Documents

async createDocument(dbId: string, colId:string, data, id=null): Promise<Document> {
     try {
         return await database.createDocument(dbId, colId, id||undefined, data);

     }catch (error){
         console.error("Error creating document:", error.message);
         return {error:error.message}
     }
},

    //update Documents
    async updateDocument(dbId: string, colId:string, id, data): Promise<Document> {
     try {
         return await database.updateDocument(dbId, colId, id, data);
     }catch (error){
         console.error("Error creating document:", error.message);
         return {error:error.message}
     }
    },

    //delete documents

    async deleteDocument(dbId: string, colId:string, id){
      try {
          await database.deleteDocument(dbId, colId, id);
          return {success:true};
      }catch (error){
         console.error("Error Deleting Document", error.message);
          return {error:error.message}
      }
    }
}

export default databaseService;