"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Producto = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../database/db");
class Producto extends sequelize_1.Model {
}
exports.Producto = Producto;
Producto.init({
    fecha: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
    descripcion: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: "Producto",
    sequelize: db_1.database,
    timestamps: true
});
