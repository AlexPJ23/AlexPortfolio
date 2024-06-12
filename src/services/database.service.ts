import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";



export const collections : { endeavors?: mongoDB.Collection } = {};

export const collection_projects : { projects?: mongoDB.Collection } = {};

export async function connectToDatabase () {
    dotenv.config();
 
    const client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.LOCALHOST_URI || '');
            
    await client.connect();
        
    const db: mongoDB.Db = client.db(process.env.DATABASE);
   
    const endeavorCollection: mongoDB.Collection = db.collection(process.env.ENDEAVOR_COLLECTION_NAME || '');
 
    collections.endeavors = endeavorCollection;
       
         console.log(`Successfully connected to database: ${db.databaseName} and collection: ${endeavorCollection.collectionName}`);
 }