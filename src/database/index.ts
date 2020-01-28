import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();
const { DB_HOST, DB_DATABASE, DB_USER, DB_PW } = process.env;

const db = new Sequelize(DB_DATABASE, DB_USER, DB_PW, {
  host: DB_HOST || '',
  dialect: 'mysql',
  define: {
    timestamps: false,
    underscored: true
  },
  timezone: '+09:00',
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

export default db;
