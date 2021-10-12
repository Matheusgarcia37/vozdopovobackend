const dotevnt = require('dotenv')

dotevnt.config({
   path: process.env.NODE_ENV === 'dev' ? '.env.dev' : '.env.production'
});
module.exports = {  
   "type": "postgres",
   "host": "localhost",
   "port": 5432,
   "username": "postgres",
   "password": "9889",
   "database": "vozdopovo",
   "synchronize": true,
   "logging": false,
   "entities": [
      `${process.env.TYPEORM_ENTITIES}`
   ],
   "migrations": [
      `${process.env.TYPEORM_MIGRATION}`
   ],
   "subscribers": [
      `${process.env.TYPEORM_SUBSCRIBERS}`
   ],
   "cli": {
      "entitiesDir": `${process.env.TYPEORM_ENTITIES_DIR}`,
      "migrationsDir": `${process.env.TYPEORM_MIGRATIONS_DIR}`,
      "subscribersDir": `${process.env.TYPEORM_SUBSCRIBER_DIR}`
   }
}