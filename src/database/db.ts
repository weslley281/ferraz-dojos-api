const mysql = require('mysql2');

import { Sequelize } from 'sequelize';

const connection = new Sequelize('ferrazdojos', 'ferrazdojos', 'Wesv@g28', {
  host: 'ferrazdojos.mysql.uhserver.com',
  dialect: 'mysql',
});

async function createConnectionDataBase() {
  try {
    await connection.authenticate();
    console.log('*******Connection made to the database!*******');
  } catch (error) {
    console.error('Error connecting to the database: ', error);
  }
}

export { connection, createConnectionDataBase };
