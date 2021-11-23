import sequelize from "sequelize";
import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";

export class Producto extends Model{
    public fecha!: Date;
    public descripcion!: string;

}
export interface ProductoI{
    fecha: Date;
    descripcion: string;

}

Producto.init(

   {
    fecha: {
        type: DataTypes.DATE,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false
    }

   },
   {
    tableName: "Producto",
    sequelize: database,
    timestamps: true
   }

)