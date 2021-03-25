require("./db/connection");
const { Person } = require("./models/Person");

const app = async () => {
  const person = new Person({
    name: "Ben",
    email: "ben@email.com",
    age: 23,
    likesPizza: true,
  });
  await person.save();
};

app();
