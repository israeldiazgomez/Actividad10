import { Application } from "express";
import { ProveedoreController } from "../controllers/proveedore.controller";

export class ProveedoreRoutes{
    public proveedoreController: ProveedoreController = new ProveedoreController();
    public routes(app: Application): void{

        app.route('/proveedor').get(this.proveedoreController.getAll),
        app.route('/proveedor').post(this.proveedoreController.createProveedor)
        
       
    }
}
