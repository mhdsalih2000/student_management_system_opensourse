"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const corsOptions = { origin: ["http://localhost:5173"] };
app.use(express.json());
app.use(cors(corsOptions));
app.use(morgan('dev'));
exports.default = app;
//# sourceMappingURL=app.js.map