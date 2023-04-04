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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SolicitudesController = void 0;
const common_1 = require("@nestjs/common");
const solicitudes_dtos_1 = require("../dtos/solicitudes.dtos");
const solicitudes_service_1 = require("../services/solicitudes.service");
let SolicitudesController = class SolicitudesController {
    constructor(solicitudService) {
        this.solicitudService = solicitudService;
    }
    create(createUsuarioDto) {
        try {
            return this.solicitudService.create(createUsuarioDto);
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(error);
        }
    }
    findAll() {
        try {
            return this.solicitudService.findAll();
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(error);
        }
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [solicitudes_dtos_1.CreateSolicitudDto]),
    __metadata("design:returntype", void 0)
], SolicitudesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SolicitudesController.prototype, "findAll", null);
SolicitudesController = __decorate([
    (0, common_1.Controller)('solicitudes'),
    __metadata("design:paramtypes", [solicitudes_service_1.SolicitudesService])
], SolicitudesController);
exports.SolicitudesController = SolicitudesController;
//# sourceMappingURL=solicitudes.controller.js.map