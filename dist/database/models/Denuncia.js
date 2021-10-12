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
var Arquivo_1 = require("./Arquivo");
var Cidade_1 = require("./Cidade");
var ComentariosDeDenuncia_1 = require("./ComentariosDeDenuncia");
var RegistroDeCidadao_1 = require("./RegistroDeCidadao");
var Denuncia = /** @class */ (function () {
    function Denuncia() {
    }
    Denuncia_1 = Denuncia;
    var Denuncia_1;
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('uuid'),
        __metadata("design:type", String)
    ], Denuncia.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ nullable: true }),
        __metadata("design:type", String)
    ], Denuncia.prototype, "token", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Denuncia.prototype, "titulo", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Denuncia.prototype, "descricao", void 0);
    __decorate([
        typeorm_1.Column({ type: 'enum', enum: ['aberto', 'fechado', 'resolvido'], default: 'aberto' }),
        __metadata("design:type", String)
    ], Denuncia.prototype, "status", void 0);
    __decorate([
        typeorm_1.Column({ nullable: true }),
        __metadata("design:type", Number)
    ], Denuncia.prototype, "cidadeId", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return Cidade_1.Cidade; }, function (denuncias) { return Denuncia_1; }),
        typeorm_1.JoinColumn({ name: 'cidadeId', referencedColumnName: 'id' }),
        __metadata("design:type", Cidade_1.Cidade)
    ], Denuncia.prototype, "cidade", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return Arquivo_1.Arquivo; }, function (Arquivo) { return Arquivo.denuncia; }),
        __metadata("design:type", Array)
    ], Denuncia.prototype, "arquivos", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return ComentariosDeDenuncia_1.ComentariosDeDenuncia; }, function (ComentariosDeDenuncia) { return ComentariosDeDenuncia.denuncia; }),
        __metadata("design:type", Array)
    ], Denuncia.prototype, "comentariosDeDenuncias", void 0);
    __decorate([
        typeorm_1.Column({ nullable: true }),
        __metadata("design:type", Number)
    ], Denuncia.prototype, "cidadaoId", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return RegistroDeCidadao_1.RegistroDeCidadao; }, function (denuncias) { return Denuncia_1; }),
        typeorm_1.JoinColumn({ name: 'cidadaoId', referencedColumnName: 'id' }),
        __metadata("design:type", RegistroDeCidadao_1.RegistroDeCidadao)
    ], Denuncia.prototype, "registroDeCidadao", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Denuncia.prototype, "createdAt", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], Denuncia.prototype, "updatedAt", void 0);
    __decorate([
        typeorm_1.DeleteDateColumn(),
        __metadata("design:type", Date)
    ], Denuncia.prototype, "deletedAt", void 0);
    Denuncia = Denuncia_1 = __decorate([
        typeorm_1.Entity()
    ], Denuncia);
    return Denuncia;
}());
exports.Denuncia = Denuncia;
//# sourceMappingURL=Denuncia.js.map