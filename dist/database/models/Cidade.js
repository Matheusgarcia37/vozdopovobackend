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
var UserPrefeitura_1 = require("./UserPrefeitura");
var Cidade = /** @class */ (function () {
    function Cidade() {
    }
    Cidade_1 = Cidade;
    var Cidade_1;
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('uuid'),
        __metadata("design:type", String)
    ], Cidade.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Cidade.prototype, "nome", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Cidade.prototype, "createdAt", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return UserPrefeitura_1.UserPrefeitura; }, function (cidade) { return Cidade_1; }),
        __metadata("design:type", UserPrefeitura_1.UserPrefeitura)
    ], Cidade.prototype, "usersPrefeitura", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return Denuncia_1.Denuncia; }, function (cidade) { return Cidade_1; }),
        __metadata("design:type", Denuncia_1.Denuncia)
    ], Cidade.prototype, "denuncias", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], Cidade.prototype, "updatedAt", void 0);
    __decorate([
        typeorm_1.DeleteDateColumn(),
        __metadata("design:type", Date)
    ], Cidade.prototype, "deletedAt", void 0);
    Cidade = Cidade_1 = __decorate([
        typeorm_1.Entity()
    ], Cidade);
    return Cidade;
}());
exports.Cidade = Cidade;
//# sourceMappingURL=Cidade.js.map