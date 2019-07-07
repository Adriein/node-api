const Sequelize = require("sequelize");

const { dbSettings } = require("./keys");

module.exports = new Sequelize(
  dbSettings.database,
  dbSettings.user,
  dbSettings.password,
  {
    host: dbSettings.host,
    dialect: dbSettings.dialect,
    operatorsAliases: false
  }
);
