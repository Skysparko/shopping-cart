const { Sequelize } = require("sequelize");

//creating database and giving it (DB-name,user,password)
const createDB = new Sequelize("cart-db", "user", "password", {
  dialect: "sqlite",
  host: "./config/db.sqlite",
});

//checking the connection of db
const connectDB = () => {
  createDB
    .sync()
    .then(() => {
      console.log("DB is connected");
    })
    .catch(() => {
      console.log("DB is not connected");
    });
};

module.exports = { createDB, connectDB };
