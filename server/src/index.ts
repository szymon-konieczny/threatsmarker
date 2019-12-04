import express from 'express';
import cors from 'cors';
import 'reflect-metadata';

import dotenv from 'dotenv';
import bodyParser from 'body-parser';

import { connect } from './database';
import router from './features';

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api', router);

export const connectDatabase = async () => {
  try {
    await connect().then(conn => conn.runMigrations());
  } catch (err) {
    throw new Error(err);
  }
}

app.listen(process.env.PORT, () => {
  console.log('Server is listening');
  connectDatabase().then(connection => {
    console.log('conn: ', connection);
  }).catch(error => console.log(error));;
});
