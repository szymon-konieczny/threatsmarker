import express from 'express';
import router from './features';

const app = express();

app.use('/api', router);

app.listen(8080, () => {
  console.log('Server is listening');
});

// logger: pino/winston, config: dotenv, walidacja: joi/class validator
// error handling
