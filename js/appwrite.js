import {
  Client,
  Account,
  Databases,
  Storage
} from "https://cdn.jsdelivr.net/npm/appwrite@13.0.1/dist/esm/sdk.js";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1") // or self-hosted endpoint
  .setProject("69609e88000a6d84dde4");

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
