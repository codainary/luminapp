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
var Solicitud_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Solicitud = void 0;
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
const typeorm_2 = require("@nestjs/typeorm");
const abstract_entity_1 = require("../../../common/abstract.entity");
const configuration_1 = require("../../../config/configuration");
let Solicitud = Solicitud_1 = class Solicitud extends abstract_entity_1.AbstractEntity {
    constructor(solicitudRepo, configEnv) {
        super();
        this.solicitudRepo = solicitudRepo;
        this.configEnv = configEnv;
    }
};
__decorate([
    (0, typeorm_1.Column)({
        name: 'direccion_falla',
    }),
    __metadata("design:type", String)
], Solicitud.prototype, "direccionFalla", void 0);
__decorate([
    (0, typeorm_1.Column)({
        length: 20,
        name: 'telefono_contacto',
        nullable: false,
    }),
    __metadata("design:type", String)
], Solicitud.prototype, "telefonoContacto", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
    }),
    __metadata("design:type", String)
], Solicitud.prototype, "observacion", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
    }),
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
    __param(1, (0, common_1.Inject)(configuration_1.default.KEY)),
    __metadata("design:paramtypes", [typeorm_1.Repository, void 0])
], Solicitud);
exports.Solicitud = Solicitud;
//# sourceMappingURL=solicitud.entity.js.map