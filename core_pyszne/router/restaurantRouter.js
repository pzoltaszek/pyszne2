const express = require('express');
const restaurantRouter = express.Router();
const chalk = require('chalk');

let restaurantsDB = require('../data/restaurants');

function router() {
    restaurantRouter.get("/", async (req, res) => {
        try {
            let data = await restaurantsDB.getRestaurants();
            if (data.length > 0) {
                console.log(`${chalk.green('[  OK  ]')} Data loaded from DB`);
                return res.json({
                    success: true,
                    data: data
                });
            } else {
                throw new Error('data not found');
            }
        } catch (err) {
            console.log(`${chalk.red('[FAILED]')} Loading data error: ${err}`);
        }
    });

    restaurantRouter.get("/:id", async (req, res) => {
        try {
            let id = req.params.id,
                data = await restaurantsDB.getRestaurantById(id);
            if (data.length > 0) {
                console.log(`${chalk.green('[  OK  ]')} Data loaded from DB`);
                return res.json({
                    success: true,
                    data: data
                });
            } else {
                throw new Error('data not found');
            }
        } catch (err) {
            console.log(`${chalk.red('[FAILED]')} Loading data error: ${err}`);
            return res.json({
                success: false,
                data: "No data Found"
            });
        }
    });

    return restaurantRouter;
}

module.exports = router();