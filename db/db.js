const path = require('path');
const { Sequelize, Model } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: path.join(__dirname, 'db.sqlite'),
    logging: false
});

//const squelize = new Sequelize("")

module.exports = {
    sequelize,
    Sequelize
};