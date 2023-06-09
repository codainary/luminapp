"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContribuyentesModule = void 0;
const contribuyente_entity_1 = require("./entities/contribuyente.entity");
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const contribuyentes_controller_1 = require("./controllers/contribuyentes.controller");
const contribuyentes_service_1 = require("./services/contribuyentes.service");
let ContribuyentesModule = class ContribuyentesModule {
};
ContribuyentesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([contribuyente_entity_1.Contribuyente])],
        controllers: [contribuyentes_controller_1.ContribuyentesController],
        providers: [contribuyentes_service_1.ContribuyentesService],
        exports: [contribuyentes_service_1.ContribuyentesService],
    })
], ContribuyentesModule);
exports.ContribuyentesModule = ContribuyentesModule;
//# sourceMappingURL=contribuyentes.module.js.map