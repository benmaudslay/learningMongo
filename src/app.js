require("./db/connection");
const { Person } = require("./models/Person");
const { Task } = require("./models/Task");

const app = async () => {
  try {
    const person = new Person({
      name: "James",
      email: "james@email.com",
      age: 23,
      likesPizza: true,
    });
    await person.save();
  } catch (err) {
    console.log(err);
  }
};

app();
