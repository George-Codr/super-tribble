import { Client, Account, Databases, Storage } from "https://cdn.jsdelivr.net/npm/appwrite@8.6.2/dist/appwrite.min.js";

const client = new Client();
client
  .setEndpoint("https://[YOUR_APPWRITE_ENDPOINT]/v1") // Replace with your Appwrite endpoint
  .setProject("[YOUR_PROJECT_ID]"); // Replace with your Appwrite Project ID

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
