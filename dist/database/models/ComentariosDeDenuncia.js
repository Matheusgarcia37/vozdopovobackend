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
var ComentariosDeDenuncia = /** @class */ (function () {
    function ComentariosDeDenuncia() {
    }
    ComentariosDeDenuncia_1 = ComentariosDeDenuncia;
    var ComentariosDeDenuncia_1;
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('uuid'),
        __metadata("design:type", String)
    ], ComentariosDeDenuncia.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], ComentariosDeDenuncia.prototype, "mensagem", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Boolean)
    ], ComentariosDeDenuncia.prototype, "authenticated", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], ComentariosDeDenuncia.prototype, "denunciaId", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return Denuncia_1.Denuncia; }, function (comentariosDeDenuncias) { return ComentariosDeDenuncia_1; }),
        typeorm_1.JoinColumn({ name: 'denunciaId', referencedColumnName: 'id' }),
        __metadata("design:type", Denuncia_1.Denuncia)
    ], ComentariosDeDenuncia.prototype, "denuncia", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], ComentariosDeDenuncia.prototype, "createdAt", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], ComentariosDeDenuncia.prototype, "updatedAt", void 0);
    __decorate([
        typeorm_1.DeleteDateColumn(),
        __metadata("design:type", Date)
    ], ComentariosDeDenuncia.prototype, "deletedAt", void 0);
    ComentariosDeDenuncia = ComentariosDeDenuncia_1 = __decorate([
        typeorm_1.Entity()
    ], ComentariosDeDenuncia);
    return ComentariosDeDenuncia;
}());
exports.ComentariosDeDenuncia = ComentariosDeDenuncia;
//# sourceMappingURL=ComentariosDeDenuncia.js.map