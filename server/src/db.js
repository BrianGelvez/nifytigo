require("dotenv").config();
const { Sequelize } = require("sequelize");

const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, EXTERNAL_DATABASE } = process.env;

// const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
//   logging: false, 
//   native: false, 
// });

const sequelize = new Sequelize(EXTERNAL_DATABASE, { // Cambio de cadena de conexión
  logging: false, 
  native: false, 
});

const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

modelDefiners.forEach(model => model(sequelize));

// Definición de las relaciones
const { favorites, nfts, users, categories } = sequelize.models;

// 1. Relación uno a muchos: users -> nfts
users.hasMany(nfts, {
  foreignKey: 'userId', // Nombre de la clave externa en el modelo "nfts" que referencia al modelo "users"
});
nfts.belongsTo(users, {
  foreignKey: 'userId', // Nombre de la clave externa en el modelo "nfts" que referencia al modelo "users"
});

// 2. Relación muchos a muchos: favorites <-> users
favorites.belongsToMany(users, {
  through: 'favorites_users', // Nombre de la tabla intermedia que contiene las relaciones
});
users.belongsToMany(favorites, {
  through: 'favorites_users', // Nombre de la tabla intermedia que contiene las relaciones
});

// 3. Relación muchos a muchos: nfts <-> categories
nfts.belongsToMany(categories, {
  through: 'nfts_categories', // Nombre de la tabla intermedia que contiene las relaciones
});
categories.belongsToMany(nfts, {
  through: 'nfts_categories', // Nombre de la tabla intermedia que contiene las relaciones
});

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};
