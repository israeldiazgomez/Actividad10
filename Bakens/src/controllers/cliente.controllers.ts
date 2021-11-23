import { Response, Request } from "express";
import { Cliente,ClienteI } from "../models/clientes";

export class ClienteController{

    public async getClientes(req: Request, res: Response){
        let cliente:Cliente[]
        try {
            cliente = await Cliente.findAll()
            res.json(cliente)
           
        } catch (error) {
            res.status(400).json({msg:"Error al conectar con la base."})
        }
    }


    public async create(req: Request, res: Response){
        let cliente:ClienteI[] = req.body
        try {
           const dataCliente: ClienteI = await Cliente.create(cliente)
           res.json(dataCliente)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}