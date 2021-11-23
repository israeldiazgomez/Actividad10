import { Application } from "express";
import { ClienteController } from "../controllers/cliente.controllers";

export class clienteRoutes{
    public clientecontroller: ClienteController = new ClienteController();


    public routes(app: Application){
        app.route('/clientes').get(this.clientecontroller.getClientes)
        app.route('/clientes').post(this.clientecontroller.create)
    }
}