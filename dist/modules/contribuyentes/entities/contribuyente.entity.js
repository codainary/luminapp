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
exports.Contribuyente = void 0;
const typeorm_1 = require("typeorm");
const abstract_entity_1 = require("../../../common/abstract.entity");
const usuario_entity_1 = require("../../usuarios/entities/usuario.entity");
let Contribuyente = class Contribuyente extends abstract_entity_1.AbstractEntity {
};
__decorate([
    (0, typeorm_1.Column)({
        type: 'character varying',
        length: 20,
        nullable: false,
        unique: true,
    }),
    __metadata("design:type", String)
], Contribuyente.prototype, "cedula", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'character varying',
        length: 15,
        name: 'primer_nombre',
        nullable: false,
    }),
    __metadata("design:type", String)
], Contribuyente.prototype, "primerNombre", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'character varying',
        length: 15,
        name: 'segundo_nombre',
    }),
    __metadata("design:type", String)
], Contribuyente.prototype, "segundoNombre", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'character varying',
        length: 15,
        nullable: false,
        name: 'primer_apellido',
    }),
    __metadata("design:type", String)
], Contribuyente.prototype, "primerApellido", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'character varying',
        length: 15,
        nullable: false,
        name: 'segundo_apellido',
    }),
    __metadata("design:type", String)
], Contribuyente.prototype, "segundoApellido", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'character varying',
        length: 20,
    }),
    __metadata("design:type", String)
], Contribuyente.prototype, "telefono", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'character varying',
        nullable: false,
    }),
    __metadata("design:type", String)
], Contribuyente.prototype, "correo", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'character varying',
    }),
    __metadata("design:type", String)
], Contribuyente.prototype, "direccion", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => usuario_entity_1.Usuario, (usuario) => usuario.contribuyente, {
        nullable: true,
    }),
    __metadata("design:type", usuario_entity_1.Usuario)
], Contribuyente.prototype, "usuario", void 0);
Contribuyente = __decorate([
    (0, typeorm_1.Entity)({ name: 'contribuyentes' })
], Contribuyente);
exports.Contribuyente = Contribuyente;
//# sourceMappingURL=contribuyente.entity.js.map