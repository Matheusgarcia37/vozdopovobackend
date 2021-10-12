"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Arquivo_1 = require("../database/models/Arquivo");
var Denuncia_1 = require("../database/models/Denuncia");
var RegistroDeCidadao_1 = require("../database/models/RegistroDeCidadao");
var DenunciasController = /** @class */ (function () {
    function DenunciasController() {
    }
    DenunciasController.prototype.store = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var body, repo, cidadao, denuncia, repoCidadao, existCidadao, responseOfCidadao, auxToken, token, tokenExist, response, tamanho, repoArquivos, i, arquivo, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        body = JSON.parse(JSON.stringify(req.body));
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 15, , 16]);
                        repo = typeorm_1.getRepository(Denuncia_1.Denuncia);
                        cidadao = void 0, denuncia = void 0;
                        //Verifico se na requisição existe um cidadao, se sim a denuncia é identificada, se não, é uma denúncia anônima
                        if (body.cidadao) {
                            if (typeof body.cidadao === 'string' && typeof body.denuncia === 'string') {
                                cidadao = JSON.parse(JSON.parse(JSON.stringify(body.cidadao)));
                                denuncia = JSON.parse(JSON.parse(JSON.stringify(body.denuncia)));
                            }
                            else {
                                cidadao = body.cidadao;
                                denuncia = body.denuncia;
                            }
                        }
                        else {
                            if (typeof body.denuncia === 'string') {
                                denuncia = JSON.parse(JSON.parse(JSON.stringify(body.denuncia)));
                            }
                            else {
                                denuncia = body.denuncia;
                            }
                        }
                        if (!cidadao) return [3 /*break*/, 6];
                        repoCidadao = typeorm_1.getRepository(RegistroDeCidadao_1.RegistroDeCidadao);
                        return [4 /*yield*/, repoCidadao.findOne({ where: { email: cidadao.email } })];
                    case 2:
                        existCidadao = _a.sent();
                        if (!existCidadao) return [3 /*break*/, 4];
                        return [4 /*yield*/, repoCidadao.update({ id: existCidadao.id }, cidadao)];
                    case 3:
                        _a.sent();
                        denuncia.cidadaoId = existCidadao.id;
                        return [3 /*break*/, 6];
                    case 4: return [4 /*yield*/, repoCidadao.save(cidadao)];
                    case 5:
                        responseOfCidadao = _a.sent();
                        denuncia.cidadaoId = responseOfCidadao.id;
                        _a.label = 6;
                    case 6:
                        auxToken = 0;
                        _a.label = 7;
                    case 7:
                        if (!(auxToken === 0)) return [3 /*break*/, 9];
                        token = Math.random().toString(36).substr(2);
                        return [4 /*yield*/, repo.findOne({ where: { token: token } })];
                    case 8:
                        tokenExist = _a.sent();
                        if (!tokenExist) {
                            auxToken++;
                            denuncia.token = token;
                        }
                        return [3 /*break*/, 7];
                    case 9:
                        denuncia.cidadeId = '8dab924c-22b5-484e-887d-c5ca718f0cd3'; // cidade id
                        return [4 /*yield*/, repo.save(denuncia)
                            // lidando com arquivos
                        ];
                    case 10:
                        response = _a.sent();
                        if (!req.files) return [3 /*break*/, 14];
                        tamanho = req.files.length;
                        repoArquivos = typeorm_1.getRepository(Arquivo_1.Arquivo);
                        i = 0;
                        _a.label = 11;
                    case 11:
                        if (!(i < tamanho)) return [3 /*break*/, 14];
                        arquivo = {
                            denunciaId: response.id,
                            url: req.files[i].path
                        };
                        return [4 /*yield*/, repoArquivos.save(arquivo)];
                    case 12:
                        _a.sent();
                        _a.label = 13;
                    case 13:
                        i++;
                        return [3 /*break*/, 11];
                    case 14: return [2 /*return*/, res.status(201).send(response)];
                    case 15:
                        error_1 = _a.sent();
                        console.log(error_1.message);
                        return [2 /*return*/, res.status(400).json({ message: 'Houve um erro ao tentar criar uma denuncia' })];
                    case 16: return [2 /*return*/];
                }
            });
        });
    };
    DenunciasController.prototype.index = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var repo, response, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        repo = typeorm_1.getRepository(Denuncia_1.Denuncia);
                        return [4 /*yield*/, repo.find({ relations: ['registroDeCidadao', 'cidade', 'arquivos'] })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, res.status(201).json(response)];
                    case 2:
                        error_2 = _a.sent();
                        console.log(error_2.message);
                        return [2 /*return*/, res.status(400).json({ message: 'Houve um erro ao tentar buscar as denuncias cadastradas' })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    DenunciasController.prototype.delete = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, repo, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = req.body.id;
                        repo = typeorm_1.getRepository(Denuncia_1.Denuncia);
                        return [4 /*yield*/, repo.softDelete(id)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, res.status(201).json({ message: 'A denuncia foi deletada com sucesso!' })];
                    case 2:
                        error_3 = _a.sent();
                        console.log(error_3.message);
                        return [2 /*return*/, res.status(400).json({ message: 'Ocorreu um erro em tentar deletar a denuncia' })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    DenunciasController.prototype.findByToken = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var token, repo, denuncia, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        token = req.body.token;
                        repo = typeorm_1.getRepository(Denuncia_1.Denuncia);
                        return [4 /*yield*/, repo.findOne({ where: { token: token }, relations: ['registroDeCidadao', 'cidade', 'comentariosDeDenuncias', 'arquivos'] })];
                    case 1:
                        denuncia = _a.sent();
                        denuncia.comentariosDeDenuncias.sort(function (a, b) {
                            var newA = a.createdAt;
                            var newB = b.createdAt;
                            return newA - newB;
                        });
                        return [2 /*return*/, res.status(200).json(denuncia)];
                    case 2:
                        error_4 = _a.sent();
                        console.log(error_4.message);
                        return [2 /*return*/, res.status(400).json({ error: 'Não foi possivel buscar a sua denúncia, por favor verifique seu token e tente novamente' })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return DenunciasController;
}());
exports.default = new DenunciasController();
//# sourceMappingURL=DenunciasController.js.map