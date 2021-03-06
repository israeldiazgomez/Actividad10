import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";

export class Cliente extends Model{
    public nombre!: string;
    public apellido!: string;
    public correo!: string;
    public clave!: string;
}
export interface ClienteI{
    nombre: string;
    apellido: string;
    correo: string;
    clave: string;
}

Cliente.init(

   {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false
    },
    correo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    clave: {
        type: DataTypes.STRING,
        allowNull: false
    },

   },
   {
    tableName: "Cliente",
    sequelize: database,
    timestamps: true
   }

)