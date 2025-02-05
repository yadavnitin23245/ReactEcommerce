const { MongoClient } = require('mongodb');
const url = "mongodb://localhost:27017";
const dbName = "mydb";

async function connectDB() {
    const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
    console.log("Connected to MongoDB");
    return client; // Return the client instance
  }

//for inserting data
  async function insertCustomer(customerData) {
    const client = await connectDB(); // Get the connected client
    try {
      const db = client.db(dbName);
      const customersCollection = db.collection("customers");
  
      const result = await customersCollection.insertOne(customerData);
      console.log("Customer inserted successfully with ID:", result.insertedId);
    } catch (err) {
      console.error("Error inserting customer:", err);
    } finally {
      await client.close(); // Close the connection after operation
    }
  }

  //insert data into boss
  //for inserting data
  async function insert_data_into_boss(bossdata) {
    const client = await connectDB(); // Get the connected client
    try {
      const db = client.db(dbName);
      const customersCollection = db.collection("Boss");
  
      const result = await customersCollection.insertOne(bossdata);
      console.log("bossdata inserted successfully with ID:", result.insertedId);
    } catch (err) {
      console.error("Error inserting customer:", err);
    } finally {
      await client.close(); // Close the connection after operation
    }
  }



  //create a collection (table)
  async function Create_Collection(collectionaname) {
    const client = await connectDB(); // Get the connected client
    try {
      const db = client.db(dbName);

  
      await db.createCollection(collectionaname);
    console.log(collectionaname+ " collection created successfully!");
  } catch (err) {
    console.error("Error creating collection:", err);
  } finally {
    await client.close();
  }

  }
  
  // Example Usage:
  Create_Collection("Boss");
  //insertCustomer({ name: "John Doe", email: "johndoe@example.com", phone: "1234567890" });

  insert_data_into_boss({ name: "John Doe", email: "johndoe@example.com", phone: "1234567890",isdelete:false });
  

  
 
