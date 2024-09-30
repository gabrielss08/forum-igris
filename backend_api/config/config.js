require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USERNAME || 'gabriel',
    password: process.env.DB_PASSWORD || 'Root@poser',
    database: process.env.DB_NAME || 'poser',
    host: process.env.DB_HOST || 'bd-poser.mysql.database.azure.com',
    dialect: 'mysql',
    port: process.env.DB_PORT || 3306,
    dialectOptions: {
      ssl: {
        require: true
      }
    }
  },
  test: {
    username: process.env.DB_USERNAME || 'gabriel',
    password: process.env.DB_PASSWORD || 'Root@poser',
    database: process.env.DB_NAME || 'database_test',
    host: process.env.DB_HOST || 'bd-poser.mysql.database.azure.com',
    dialect: 'mysql',
    port: process.env.DB_PORT || 3306,
    dialectOptions: {
      ssl: {
        require: true
      }
    }
  },
  production: {
    username: process.env.DB_USERNAME || 'gabriel',
    password: process.env.DB_PASSWORD || 'Root@poser',
    database: process.env.DB_NAME || 'database_production',
    host: process.env.DB_HOST || 'bd-poser.mysql.database.azure.com',
    dialect: 'mysql',
    port: process.env.DB_PORT || 3306,
    dialectOptions: {
      ssl: {
        require: true
      }
    }
  }
};
