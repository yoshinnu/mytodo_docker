require('dotenv').config();
console.log(process.env.MYSQL_USER)
module.exports = {
  "development": {
    "username": process.env.MYSQL_USER,
    "password": process.env.MYSQL_PASSWORD,
    "database": process.env.MYSQL_DATABASE,
    "host": process.env.MYSQL_SERVER,
    "dialect": "mysql",
    "dialectOptions": {
      "ssl": "Amazon RDS"
    }
  },
  "test": {
    "username": 'yg01root',
    "password": 'yg01root',
    "database": 'todo',
    "host": 'mysqldb3.canjfmvovibs.ap-northeast-1.rds.amazonaws.com',
    "dialect": "mysql",
    "dialectOptions": {
      "ssl": "Amazon RDS"
    }
  },
  "production": {
    "username": process.env.MYSQL_USER,
    "password": process.env.MYSQL_PASSWORD,
    "database": process.env.MYSQL_DATABASE,
    "host": process.env.MYSQL_SERVER,
    "dialect": "mysql"
  }
}
