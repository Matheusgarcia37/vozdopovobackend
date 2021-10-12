"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var AuthControllerPrefeitura_1 = __importDefault(require("../controllers/AuthControllerPrefeitura"));
var UsersPrefeituraController_1 = __importDefault(require("../controllers/UsersPrefeituraController"));
var UserRouter = express_1.Router();
UserRouter.post('/', UsersPrefeituraController_1.default.store);
UserRouter.post('/auth', AuthControllerPrefeitura_1.default.authenticate);
exports.default = UserRouter;
//# sourceMappingURL=usersPrefeitura.routes.js.map