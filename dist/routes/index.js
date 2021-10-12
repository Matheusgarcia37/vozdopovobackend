"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var cidades_routes_1 = __importDefault(require("./cidades.routes"));
var comentariosDenuncias_routes_1 = __importDefault(require("./comentariosDenuncias.routes"));
var denuncias_routes_1 = __importDefault(require("./denuncias.routes"));
var usersPrefeitura_routes_1 = __importDefault(require("./usersPrefeitura.routes"));
var routes = express_1.Router();
routes.use('/users', usersPrefeitura_routes_1.default);
routes.use('/cidades', cidades_routes_1.default);
routes.use('/denuncias', denuncias_routes_1.default);
routes.use('/comentarios', comentariosDenuncias_routes_1.default);
exports.default = routes;
//# sourceMappingURL=index.js.map