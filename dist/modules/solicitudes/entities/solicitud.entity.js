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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var Solicitud_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Solicitud = void 0;
const typeorm_1 = require("typeorm");
const abstract_entity_1 = require("../../../common/abstract.entity");
const typeorm_2 = require("@nestjs/typeorm");
let Solicitud = Solicitud_1 = class Solicitud extends abstract_entity_1.AbstractEntity {
    constructor(solicitudRepo) {
        super();
        this.solicitudRepo = solicitudRepo;
    }
    generarCodigo() {
        return __awaiter(this, void 0, void 0, function* () {
            const base = process.env.SOLICITUDES_CONSECUTIVO;
            const ultimoNroSolicitud = yield this.solicitudRepo.find();
            let ultimaSecuencia;
            if (!ultimoNroSolicitud) {
                ultimaSecuencia = base;
            }
            ultimaSecuencia = ultimoNroSolicitud ? parseInt(ultimoNroSolicitud[0].nroSolicitud.slice(-9)) : 0;
            this.nroSolicitud = `${base + ultimaSecuencia + 1}`.padStart(10, '0');
        });
    }
};
__decorate([
    (0, typeorm_1.Column)({
        name: 'nro_solicitud',
        unique: true,
    }),
    __metadata("design:type", String)
], Solicitud.prototype, "nroSolicitud", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Solicitud.prototype, "generarCodigo", null);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
    }),
    __metadata("design:type", String)
], Solicitud.prototype, "observacion", void 0);
__decorate([
    (0, typeorm_1.Column)({}),
    __metadata("design:type", String)
], Solicitud.prototype, "respuesta", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text',
        nullable: false,
        name: 'correo_respuesta',
    }),
    __metadata("design:type", String)
], Solicitud.prototype, "correoRespuesta", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        default: 0,
    }),
    __metadata("design:type", Number)
], Solicitud.prototype, "estado", void 0);
Solicitud = Solicitud_1 = __decorate([
    (0, typeorm_1.Entity)({ name: 'solicitudes' }),
    __param(0, (0, typeorm_2.InjectRepository)(Solicitud_1)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], Solicitud);
exports.Solicitud = Solicitud;
//# sourceMappingURL=solicitud.entity.js.map