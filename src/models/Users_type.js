const Sequelize = require("sequelize");
const dbConnection = require("../database");

const Users_type = dbConnection.define("users_type", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  rol: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  freezeTableName: true,
  timestamps: false
});

module.exports = Users_type;
