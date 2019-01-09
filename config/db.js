'use strict';

import mysql from 'mysql';
import bluebird from 'bluebird';
import config from './index';

const connection = mysql.createPool({
  connectionLimit: 10,
  host: config.db_host,
  user: config.db_user,
  password: config.db_pwd,
  database: config.db_database
});

connection.getConnection(function (err) {
  if(err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  connection.query('SET SESSION group_concat_max_len=1048576');
  console.log('Connection to database established');
});

module.exports = bluebird.promisifyAll(connection);
