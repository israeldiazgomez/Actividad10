import { Request, Response } from "express";
import { Proveedore, ProveedoreI } from "../models/Proveedore";

export class ProveedoreController{
    public async getAll(req: Request, res: Response){
        let proveedores: Proveedore[];


        try{
            proveedores = await Proveedore.findAll();
            res.json(proveedores)
        } catch (error){
            res.status(500).json(error)
        }
    }

    public mostrarproveedor(){
        
    }


    public async createProveedor(req:Request, res:Response){
        let proveedores: ProveedoreI = req.body;
        try{
            const dataProveedor: ProveedoreI = await Proveedore.create(proveedores);
            res.json(dataProveedor)
        } catch (error){
            res.status(500).json(error)
        }
    }



}
