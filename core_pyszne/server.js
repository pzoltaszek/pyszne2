require('dotenv').config({path:`${__dirname}/config/.env.dev`});
const express = require('express');
const chalk = require('chalk');
const restaurantRouter = require('./router/restaurantRouter');

const app = express();

app.use("/restaurant", restaurantRouter);


app.listen(process.env.SERVER_PORT, ()=> {
    console.log(`${chalk.green('[  OK  ]')} Server listening on port ${chalk.blue(process.env.SERVER_PORT)}`);
});