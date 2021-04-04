const dbConfig = require("./config");
const Sequelize = require("sequelize");

const {HOST, PORT, USER, PASSWORD, DB, dialect, pool} = dbConfig

const conn = new Sequelize(DB, USER, PASSWORD, {
  host: HOST,
  dialect: dialect,
  operatorsAliases: 0,

  pool: {
    max: pool.max,
    min: pool.min,
    acquire: pool.acquire,
    idle: pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.conn = conn;
db.posts = require("./posts")(conn, Sequelize);

module.exports = db;
