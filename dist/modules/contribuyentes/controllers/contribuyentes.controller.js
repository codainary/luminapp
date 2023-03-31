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
exports.ContribuyentesController = void 0;
const contribuyentes_service_1 = require("./../services/contribuyentes.service");
const common_1 = require("@nestjs/common");
const contribuyentes_dtos_1 = require("../dtos/contribuyentes.dtos");
let ContribuyentesController = class ContribuyentesController {
    constructor(contribuyentesService) {
        this.contribuyentesService = contribuyentesService;
    }
    create(payload) {
        try {
            return this.contribuyentesService.create(payload);
        }
        catch (error) {
            throw new common_1.InternalServerErrorException();
        }
    }
    findAll() {
        try {
            return this.contribuyentesService.findAll();
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
    __metadata("design:paramtypes", [contribuyentes_dtos_1.CreateContribuyenteDto]),
    __metadata("design:returntype", void 0)
], ContribuyentesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ContribuyentesController.prototype, "findAll", null);
ContribuyentesController = __decorate([
    (0, common_1.Controller)('contribuyentes'),
    __metadata("design:paramtypes", [contribuyentes_service_1.ContribuyentesService])
], ContribuyentesController);
exports.ContribuyentesController = ContribuyentesController;
//# sourceMappingURL=contribuyentes.controller.js.map