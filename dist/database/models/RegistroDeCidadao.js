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
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Denuncia_1 = require("./Denuncia");
var RegistroDeCidadao = /** @class */ (function () {
    function RegistroDeCidadao() {
    }
    RegistroDeCidadao_1 = RegistroDeCidadao;
    var RegistroDeCidadao_1;
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('uuid'),
        __metadata("design:type", String)
    ], RegistroDeCidadao.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], RegistroDeCidadao.prototype, "nome", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], RegistroDeCidadao.prototype, "email", void 0);
    __decorate([
        typeorm_1.Column({ type: 'float' }),
        __metadata("design:type", Number)
    ], RegistroDeCidadao.prototype, "telefone", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], RegistroDeCidadao.prototype, "endereco", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return Denuncia_1.Denuncia; }, function (registroDeCidadao) { return RegistroDeCidadao_1; }),
        __metadata("design:type", Denuncia_1.Denuncia)
    ], RegistroDeCidadao.prototype, "denuncias", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], RegistroDeCidadao.prototype, "createdAt", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], RegistroDeCidadao.prototype, "updatedAt", void 0);
    __decorate([
        typeorm_1.DeleteDateColumn(),
        __metadata("design:type", Date)
    ], RegistroDeCidadao.prototype, "deletedAt", void 0);
    RegistroDeCidadao = RegistroDeCidadao_1 = __decorate([
        typeorm_1.Entity()
    ], RegistroDeCidadao);
    return RegistroDeCidadao;
}());
exports.RegistroDeCidadao = RegistroDeCidadao;
//# sourceMappingURL=RegistroDeCidadao.js.map