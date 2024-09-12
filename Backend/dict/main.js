"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("./database");
const console_1 = require("./utils/console");
const app_1 = __importDefault(require("./app"));
const PORT = process.env.PORT || 5000;
(0, database_1.ConnectToDataBase)()
    .then(() => {
    (0, console_1.logVerbose)("Connected to db succesfully");
    return;
})
    .then(() => {
    app_1.default.listen(PORT, () => {
        (0, console_1.logVerbose)(`Server is listening on port ${PORT}`);
    });
})
    .catch((err) => {
    (0, console_1.logError)(`Error : ${err.message}`);
});
//# sourceMappingURL=main.js.map