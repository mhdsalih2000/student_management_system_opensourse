const express = require('express');
const cors = require('cors'); 
const morgan = require('morgan');
const app  = express();
const corsOptions = {origin: ["http://localhost:5173"]};
app.use(express.json()); 
app.use(cors(corsOptions)); 
app.use(morgan('dev')); 




export default app;