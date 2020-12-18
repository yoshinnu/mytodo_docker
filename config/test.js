require('dotenv').config({ debug: true });
console.log(process.env.MYSQL_USER)
const dotenv = require('dotenv');
const result = dotenv.config();
console.log(result.parsed);