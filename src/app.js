require("./db/connection");
const { Person } = require("./models/Person");
const { Task } = require("./models/Task");

const app = async () => {
  //   const person = new Person({
  //     name: "Ben",
  //     email: "ben@email.com",
  //     age: 23,
  //     likesPizza: true,
  //   });
  //   await person.save();

  const task = new Task({
    todo: "Buy some milk",
    completed: false,
  });

  await task.save();
};

app();
