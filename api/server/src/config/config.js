require('dotenv').config();


const url = 'postgres://xuwxqejpjjsbhz:f5a753039e1f7f767993d8c012f280998de6f6bdedc138642ca6fa3e5ba4e5a7@ec2-35-174-88-65.compute-1.amazonaws.com:5432/d8ok0t8ab1aro5'

module.exports = {

  // If using onine database
  /*development: {
     use_env_variable: url,
     dialect: 'postgres'
     //process.env.DATABASE_URL   
     
  },*/

  development: {
    database: 'status',
    username: 'postgres',
    password: process.env.DB_PASS,
    host: '127.0.0.1',
    dialect: 'postgres'
  },

  test: {
    database: 'status',
    username: 'postgres',
    password: null,
    host: '127.0.0.1',
    dialect: 'postgres'
  },

  production: {
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    dialect: 'postgres'
  }
};