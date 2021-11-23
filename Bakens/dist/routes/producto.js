"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductoRoutes = void 0;
const producto_controller_1 = require("../controllers/producto.controller");
class ProductoRoutes {
    constructor() {
        this.productoController = new producto_controller_1.ProductoController();
    }
    routes(app) {
        app.route('/producto').get(this.productoController.getAll);
        app.route('/producto').post(this.productoController.create);
    }
}
exports.ProductoRoutes = ProductoRoutes;
