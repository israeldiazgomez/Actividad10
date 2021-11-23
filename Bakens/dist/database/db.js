"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.database = void 0;
const Sequelize = require('sequelize');
const BD_NAME = 'act8';
const BD_USER = 'grupo4';
const BD_PASS = 'Grupo4.123';
exports.database = new Sequelize(BD_NAME, BD_USER, BD_PASS, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});
exports.database.sync({ forse: true })
    .then(function () {
    console.log('---------------------------------------------------------------------------------------------------------------');
    console.log('-------------------------|                    FUNCIONA CORRECTAMENTE        |----------------------------------');
    console.log('---------------------------------------------------------------------------------------------------------------');
});
