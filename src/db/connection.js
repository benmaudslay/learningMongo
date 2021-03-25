const mongoose = require("mongoose");

const URI =
  "mongodb+srv://Ben:flapjacks2@gql-ninja-demo.dblxo.mongodb.net/cactusdb?retryWrites=true&w=majority";

const connection = async () => {
  try {
    await mongoose.connect(URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("successfully connected to catcusdb");
  } catch (error) {
    console.log(error);
  }
};

connection();
