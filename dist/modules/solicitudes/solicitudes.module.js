"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SolicitudesModule = void 0;
const common_1 = require("@nestjs/common");
const solicitudes_controller_1 = require("./controllers/solicitudes.controller");
const motivos_controller_1 = require("./controllers/motivos.controller");
const tipos_controller_1 = require("./controllers/tipos.controller");
const solicitudes_service_1 = require("./services/solicitudes.service");
const motivos_service_1 = require("./services/motivos.service");
const tipos_service_1 = require("./services/tipos.service");
const typeorm_1 = require("@nestjs/typeorm");
const solicitud_entity_1 = require("./entities/solicitud.entity");
let SolicitudesModule = class SolicitudesModule {
};
SolicitudesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([solicitud_entity_1.Solicitud])],
        controllers: [solicitudes_controller_1.SolicitudesController, motivos_controller_1.MotivosController, tipos_controller_1.TiposController],
        providers: [solicitudes_service_1.SolicitudesService, motivos_service_1.MotivosService, tipos_service_1.TiposService],
        exports: [solicitudes_service_1.SolicitudesService],
    })
], SolicitudesModule);
exports.SolicitudesModule = SolicitudesModule;
//# sourceMappingURL=solicitudes.module.js.map