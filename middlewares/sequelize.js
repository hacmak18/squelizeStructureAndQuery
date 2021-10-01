const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');

module.exports = () => {
    const sequelize = new Sequelize({
        dialect: 'sqlite',
        storage: './databse/database.sqlite'
    });

    sequelize.sync().then(() => {
        console.log("Database synced");
    }).catch((err) => {
        console.log("Failed to sync error  >>>>>>>>>>>>", err);
    });
    fs.readdirSync(`${__dirname}/../models`).forEach((file) => {
        if (file.indexOf(".js") > -1) {
            const models = require(path.join(__dirname + "/../models/", file));
            models(sequelize, Sequelize);
        }
    });
}