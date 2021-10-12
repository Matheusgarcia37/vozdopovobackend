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
var creatingDb1633811420249 = /** @class */ (function () {
    function creatingDb1633811420249() {
        this.name = 'creatingDb1633811420249';
    }
    creatingDb1633811420249.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("CREATE TABLE \"user_prefeitura\" (\"id\" uuid NOT NULL DEFAULT uuid_generate_v4(), \"nome\" character varying NOT NULL, \"login\" character varying NOT NULL, \"senha\" character varying NOT NULL, \"cidadeId\" uuid NOT NULL, \"createdAt\" TIMESTAMP NOT NULL DEFAULT now(), \"updatedAt\" TIMESTAMP NOT NULL DEFAULT now(), \"deletedAt\" TIMESTAMP, CONSTRAINT \"PK_104a688dbcfef442fb79169445f\" PRIMARY KEY (\"id\"))")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"cidade\" (\"id\" uuid NOT NULL DEFAULT uuid_generate_v4(), \"nome\" character varying NOT NULL, \"createdAt\" TIMESTAMP NOT NULL DEFAULT now(), \"updatedAt\" TIMESTAMP NOT NULL DEFAULT now(), \"deletedAt\" TIMESTAMP, CONSTRAINT \"PK_9fefdadd1d47000e7fa6d2abc8c\" PRIMARY KEY (\"id\"))")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"comentarios_de_denuncia\" (\"id\" uuid NOT NULL DEFAULT uuid_generate_v4(), \"mensagem\" character varying NOT NULL, \"authenticated\" boolean NOT NULL, \"denunciaId\" uuid NOT NULL, \"createdAt\" TIMESTAMP NOT NULL DEFAULT now(), \"updatedAt\" TIMESTAMP NOT NULL DEFAULT now(), \"deletedAt\" TIMESTAMP, CONSTRAINT \"PK_d2ffaccf97990ede1a85c4850f9\" PRIMARY KEY (\"id\"))")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"registro_de_cidadao\" (\"id\" uuid NOT NULL DEFAULT uuid_generate_v4(), \"nome\" character varying NOT NULL, \"email\" character varying NOT NULL, \"telefone\" double precision NOT NULL, \"endereco\" character varying NOT NULL, \"createdAt\" TIMESTAMP NOT NULL DEFAULT now(), \"updatedAt\" TIMESTAMP NOT NULL DEFAULT now(), \"deletedAt\" TIMESTAMP, CONSTRAINT \"PK_acc90e5dbea81571507a72b9e10\" PRIMARY KEY (\"id\"))")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TYPE \"denuncia_status_enum\" AS ENUM('aberto', 'fechado', 'resolvido')")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"denuncia\" (\"id\" uuid NOT NULL DEFAULT uuid_generate_v4(), \"token\" character varying, \"titulo\" character varying NOT NULL, \"descricao\" character varying NOT NULL, \"status\" \"denuncia_status_enum\" NOT NULL DEFAULT 'aberto', \"cidadeId\" uuid, \"cidadaoId\" uuid, \"createdAt\" TIMESTAMP NOT NULL DEFAULT now(), \"updatedAt\" TIMESTAMP NOT NULL DEFAULT now(), \"deletedAt\" TIMESTAMP, CONSTRAINT \"PK_722033870edaaa2f8db39158536\" PRIMARY KEY (\"id\"))")];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"arquivo\" (\"id\" uuid NOT NULL DEFAULT uuid_generate_v4(), \"url\" character varying NOT NULL, \"denunciaId\" uuid NOT NULL, \"createdAt\" TIMESTAMP NOT NULL DEFAULT now(), \"updatedAt\" TIMESTAMP NOT NULL DEFAULT now(), \"deletedAt\" TIMESTAMP, CONSTRAINT \"PK_956a4593ecc7963784e642c1b10\" PRIMARY KEY (\"id\"))")];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"user_prefeitura\" ADD CONSTRAINT \"FK_a29e3eaa6370424b2639c697b7a\" FOREIGN KEY (\"cidadeId\") REFERENCES \"cidade\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"comentarios_de_denuncia\" ADD CONSTRAINT \"FK_ef51eb4e22f3cc70af7921685b8\" FOREIGN KEY (\"denunciaId\") REFERENCES \"denuncia\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"denuncia\" ADD CONSTRAINT \"FK_19679da8098d7291a00784870b5\" FOREIGN KEY (\"cidadeId\") REFERENCES \"cidade\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"denuncia\" ADD CONSTRAINT \"FK_a7554bab33025b3e7afb13a45b6\" FOREIGN KEY (\"cidadaoId\") REFERENCES \"registro_de_cidadao\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 11:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"arquivo\" ADD CONSTRAINT \"FK_127e8dedc567a5a08b7cdecc24a\" FOREIGN KEY (\"denunciaId\") REFERENCES \"denuncia\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 12:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    creatingDb1633811420249.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("ALTER TABLE \"arquivo\" DROP CONSTRAINT \"FK_127e8dedc567a5a08b7cdecc24a\"")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"denuncia\" DROP CONSTRAINT \"FK_a7554bab33025b3e7afb13a45b6\"")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"denuncia\" DROP CONSTRAINT \"FK_19679da8098d7291a00784870b5\"")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"comentarios_de_denuncia\" DROP CONSTRAINT \"FK_ef51eb4e22f3cc70af7921685b8\"")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"user_prefeitura\" DROP CONSTRAINT \"FK_a29e3eaa6370424b2639c697b7a\"")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"arquivo\"")];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"denuncia\"")];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TYPE \"denuncia_status_enum\"")];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"registro_de_cidadao\"")];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"comentarios_de_denuncia\"")];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"cidade\"")];
                    case 11:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"user_prefeitura\"")];
                    case 12:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return creatingDb1633811420249;
}());
exports.creatingDb1633811420249 = creatingDb1633811420249;
//# sourceMappingURL=1633811420249-creatingDb.js.map