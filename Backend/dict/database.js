"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
exports.ConnectToDataBase = ConnectToDataBase;
exports.disconnectFromDB = disconnectFromDB;
exports.runAllMigrations = runAllMigrations;
exports.dropAllTables = dropAllTables;
const console_1 = require("./utils/console");
const sequelize_1 = require("sequelize");
const { Umzug, SequelizeStorage } = require('umzug');
const SQL_DB_USER = process.env.SQL_DB_USER || "postgres";
const SQL_DB_PWD = process.env.SQL_DB_PWD || "root";
const SQL_DIALECT = (process.env.SQL_DIALECT || "postgres");
exports.sequelize = new sequelize_1.Sequelize("stg", SQL_DB_USER, SQL_DB_PWD, {
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
async function ConnectToDataBase() {
    try {
        await exports.sequelize.authenticate();
        (0, console_1.logVerbose)(`${SQL_DIALECT} connected to Database`);
        await runAllMigrations();
        return exports.sequelize;
    }
    catch (error) {
        (0, console_1.logError)(`unable connect to the DB ${error}`);
        throw error;
    }
}
async function disconnectFromDB() {
    await exports.sequelize.close();
    (0, console_1.logVerbose)(`Disconnected from database`);
}
async function runAllMigrations() {
    try {
        const migrator = new Umzug({
            migrations: {
                glob: ["migrations/*.js", { cwd: __dirname }],
            },
            context: exports.sequelize,
            storage: new SequelizeStorage({
                sequelize: exports.sequelize,
            }),
            logger: undefined,
        });
        const seeder = new Umzug({
            migrations: {
                glob: ["seeders/*.js", { cwd: __dirname }],
            },
            context: exports.sequelize,
            storage: new SequelizeStorage({
                sequelize: exports.sequelize,
            }),
            logger: console,
        });
        await migrator.up();
        (0, console_1.logVerbose)("All migrations performed successfully");
        await seeder.up();
        (0, console_1.logVerbose)("All seeders performed successfully");
    }
    catch (err) {
        (0, console_1.logError)(err);
    }
}
async function dropAllTables() {
    await exports.sequelize.getQueryInterface().dropAllTables();
    (0, console_1.logVerbose)("Dropped all tables from database...");
}
//# sourceMappingURL=database.js.map