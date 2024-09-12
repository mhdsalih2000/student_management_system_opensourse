
import { logVerbose, logError } from "./utils/console";

import { Dialect, Sequelize } from "sequelize";
const { Umzug, SequelizeStorage } = require('umzug');


const SQL_DB_USER = process.env.SQL_DB_USER || "postgres";
const SQL_DB_PWD = process.env.SQL_DB_PWD || "root";
const SQL_DIALECT = (process.env.SQL_DIALECT || "postgres") as unknown as Dialect


export const sequelize = new Sequelize(
  "stg",
  SQL_DB_USER,
  SQL_DB_PWD,
  {
    host: 'localhost',
    dialect: SQL_DIALECT,
    logging: true,

    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  });
export async function ConnectToDataBase() {
  try {
    await sequelize.authenticate()
    logVerbose(`${SQL_DIALECT} connected to Database`)
    await runAllMigrations()
    return sequelize
  }
  catch (error) {
    logError(`unable connect to the DB ${error}`)
    throw error
  }}

export async function disconnectFromDB() {
  await sequelize.close();
  logVerbose(`Disconnected from database`);
}

export async function runAllMigrations() {
  try {
    const migrator = new Umzug({
      migrations: {
        glob: ["migrations/*.js", { cwd: __dirname }],
      },
      context: sequelize,
      storage: new SequelizeStorage({
        sequelize,
      }),
      logger: undefined,
    });

    const seeder = new Umzug({
      migrations: {
        glob: ["seeders/*.js", { cwd: __dirname }],
      },
      context: sequelize,
      storage: new SequelizeStorage({
        sequelize,
      }),
      logger: console,
    });
    await migrator.up();
    logVerbose("All migrations performed successfully");
    await seeder.up();
    logVerbose("All seeders performed successfully");
  } catch (err) {
    logError(err);
  }
}


export async function dropAllTables() {
  await sequelize.getQueryInterface().dropAllTables();
  logVerbose("Dropped all tables from database...");
}