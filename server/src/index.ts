import express from 'express';
import bodyParser from 'body-parser';
import 'reflect-metadata';
import cors from 'cors';

import router from './features';
import * as Database from './database';

const app = express();

app.use(cors());
app.use(bodyParser.json());

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
