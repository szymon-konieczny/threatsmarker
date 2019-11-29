import express from 'express';
import 'reflect-metadata';

import router from './features';
import * as Database from './database';

const app = express();

app.use('/api', router);

export const connectDatabase = async () => {
  try {
    await Database.connect().then(conn => conn.runMigrations());
  } catch (err) {
    throw new Error(err);
  }
}

app.listen(8080, () => {
  console.log('Server is listening');
  connectDatabase().then(connection => {
    console.log('conn: ', connection);
    // here you can start to work with your entities
  }).catch(error => console.log(error));;
});


// logger: pino/winston, config: dotenv, walidacja: joi/class validator
// error handling
