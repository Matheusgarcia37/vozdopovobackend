"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var CidadesController_1 = __importDefault(require("../controllers/CidadesController"));
var cidadesRouter = express_1.Router();
cidadesRouter.get('/', CidadesController_1.default.index);
cidadesRouter.post('/', CidadesController_1.default.store);
exports.default = cidadesRouter;
//# sourceMappingURL=cidades.routes.js.map