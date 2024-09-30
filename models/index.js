'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db = {};

// Verificando a configuração diretamente do arquivo `config.js`
let sequelize;
if (config) {
  sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect,
    port: config.port || 3306,  // Usa a porta padrão 3306 se não for especificada
    dialectOptions: {
      ssl: {
        require: config.ssl === true  // SSL deve ser requerido dependendo da configuração
      }
    }
  });
} else {
  throw new Error('Nenhuma configuração de banco de dados foi encontrada.');
}

// Carrega os modelos
fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

// Configura as associações, se houverem
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// Exporta a instância do Sequelize e os modelos
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
