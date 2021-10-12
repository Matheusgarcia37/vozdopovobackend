"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var ComentariosDenunciasController_1 = __importDefault(require("../controllers/ComentariosDenunciasController"));
var ComentariosDenunciasRouter = express_1.Router();
ComentariosDenunciasRouter.get('/', ComentariosDenunciasController_1.default.index);
ComentariosDenunciasRouter.post('/', ComentariosDenunciasController_1.default.store);
exports.default = ComentariosDenunciasRouter;
//# sourceMappingURL=comentariosDenuncias.routes.js.map