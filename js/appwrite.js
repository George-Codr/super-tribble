import {
  Client,
  Account,
  Databases,
  Storage,
  ID
} from "https://cdn.jsdelivr.net/npm/appwrite@13.0.1/dist/esm/sdk.js";

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1") // or your self-hosted endpoint
  .setProject("YOUR_PROJECT_ID");

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export { ID };
