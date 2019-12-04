import express from 'express';
import cors from 'cors';
import 'reflect-metadata';

import dotenv from 'dotenv';
import bodyParser from 'body-parser';

import router from './features';
import { connectDatabase } from './helpers';

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api', router);

// TODO: use a promise instead of the callback
app.listen(process.env.PORT, () => {
  console.log('Server is listening');
  connectDatabase().then(connection => {
    console.log('conn: ', connection);
  }).catch(error => console.log(error));;
});
