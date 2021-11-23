"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductoController = void 0;
const producto_1 = require("../models/producto");
class ProductoController {
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let producto;
            try {
                producto = yield producto_1.Producto.findAll();
                res.json(producto);
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let producto = req.body;
            try {
                const dataProducto = yield producto_1.Producto.create(producto);
                res.json(dataProducto);
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
    }
}
exports.ProductoController = ProductoController;
