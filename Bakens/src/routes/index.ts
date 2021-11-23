import { ProductoRoutes } from "./producto" 
import { clienteRoutes } from "./cliente"
import { ProveedoreRoutes } from "./proveedore";
export class Routes{
    public productoroutes: ProductoRoutes = new ProductoRoutes()
    public clienteRoutes:  clienteRoutes = new clienteRoutes()
    public proveedoreRoutes: ProveedoreRoutes = new ProveedoreRoutes();
}