const { MongoClient } = require("mongodb");

const URI =
  "mongodb+srv://Ben:flapjacks2@gql-ninja-demo.dblxo.mongodb.net/cactusdb?retryWrites=true&w=majority";

const connection = async () => {
  try {
    const client = new MongoClient(URI, { useUnifiedTopology: true });
    await client.connect();
    console.log("successfully connected to catcusdb");
  } catch (error) {
    console.log(error);
  }
};

connection();
