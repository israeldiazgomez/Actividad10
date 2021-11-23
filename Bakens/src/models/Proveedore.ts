import sequelize from "sequelize";
import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";

// import { CompraProveedore } from "./CompraProveedore";

export class Proveedore extends Model{
    public id!: number;
    public nombre!: string;
    public apellido!: string;
    public direccion!: string;
    public provincia!: string;
    public telefono!: string;
}

export interface ProveedoreI{
    nombre: string;
    apellido: string;
    direccion: string;
    provincia: string;
    telefono: string;
}


Proveedore.init(
    {
        nombre:{
            type:DataTypes.STRING,
            allowNull: false
        },

        apellido:{
            type:DataTypes.STRING,
            allowNull: false
        },

        direccion:{
            type:DataTypes.STRING,
            allowNull: false
        },
        provincia:{
            type:DataTypes.STRING,
            allowNull: false
        },
        telefono:{
            type:DataTypes.STRING,
            allowNull: false
        },
    }, 
    {
    tableName: "proveedores",
    sequelize: database,
    timestamps: true
    }
);

// Compra.belongsToMany(Proveedore, {through: CompraProveedore});
// Proveedore.belongsToMany(Compra, {through: CompraProveedore}) 