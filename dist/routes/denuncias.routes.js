"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var DenunciasController_1 = __importDefault(require("../controllers/DenunciasController"));
var multer_1 = __importDefault(require("multer"));
var authmiddleware_1 = __importDefault(require("../middlewares/authmiddleware"));
var storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './src/uploads');
    },
    filename: function (req, file, cb) {
        // Extração da extensão do arquivo original:
        var extensaoArquivo = file.originalname.split('.')[1];
        // Cria um código randômico que será o nome do arquivo
        var novoNomeArquivo = require('crypto')
            .randomBytes(64)
            .toString('hex');
        // Indica o novo nome do arquivo:
        cb(null, novoNomeArquivo + "." + extensaoArquivo);
    }
});
var upload = multer_1.default({ storage: storage });
var DenunciasRouter = express_1.Router();
DenunciasRouter.post('/', upload.array('file'), DenunciasController_1.default.store);
DenunciasRouter.get('/', authmiddleware_1.default, DenunciasController_1.default.index);
DenunciasRouter.delete('/', authmiddleware_1.default, DenunciasController_1.default.delete);
DenunciasRouter.post('/findByToken', DenunciasController_1.default.findByToken);
exports.default = DenunciasRouter;
//# sourceMappingURL=denuncias.routes.js.map