"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Cidade_1 = require("./Cidade");
var bcryptjs_1 = __importDefault(require("bcryptjs"));
var UserPrefeitura = /** @class */ (function () {
    function UserPrefeitura() {
    }
    UserPrefeitura_1 = UserPrefeitura;
    UserPrefeitura.prototype.hashPassword = function () {
        this.senha = bcryptjs_1.default.hashSync(this.senha, 8);
    };
    var UserPrefeitura_1;
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('uuid'),
        __metadata("design:type", String)
    ], UserPrefeitura.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], UserPrefeitura.prototype, "nome", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], UserPrefeitura.prototype, "login", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], UserPrefeitura.prototype, "senha", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], UserPrefeitura.prototype, "cidadeId", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return Cidade_1.Cidade; }, function (usersPrefeitura) { return UserPrefeitura_1; }),
        typeorm_1.JoinColumn({ name: 'cidadeId', referencedColumnName: 'id' }),
        __metadata("design:type", Cidade_1.Cidade)
    ], UserPrefeitura.prototype, "cidade", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], UserPrefeitura.prototype, "createdAt", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], UserPrefeitura.prototype, "updatedAt", void 0);
    __decorate([
        typeorm_1.DeleteDateColumn(),
        __metadata("design:type", Date)
    ], UserPrefeitura.prototype, "deletedAt", void 0);
    __decorate([
        typeorm_1.BeforeInsert(),
        typeorm_1.BeforeUpdate(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], UserPrefeitura.prototype, "hashPassword", null);
    UserPrefeitura = UserPrefeitura_1 = __decorate([
        typeorm_1.Entity()
    ], UserPrefeitura);
    return UserPrefeitura;
}());
exports.UserPrefeitura = UserPrefeitura;
//# sourceMappingURL=UserPrefeitura.js.map