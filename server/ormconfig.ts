module.exports = {
   type: 'postgres',
   host: process.env.API_URL,
   port: process.env.DB_PORT,
   username: process.env.DB_USER,
   password: process.env.DB_PASS,
   database: process.env.DB_NAME,
   synchronize: true,
   logging: false,
   migrationsTableName: 'migrations',
   entities: [
      'src/features/**/*.entity.ts',
   ],
   migrations: [
      'src/migrations/**/*.ts',
   ],
   subscribers: [
      'src/subscriber/**/*.ts',
   ],
   cli: {
      entitiesDir: 'src/features',
      migrationsDir: 'src/migrations',
      subscribersDir: 'src/subscriber',
   }
};
