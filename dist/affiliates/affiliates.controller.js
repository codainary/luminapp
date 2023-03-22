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
exports.AffiliatesController = void 0;
const common_1 = require("@nestjs/common");
const affiliates_service_1 = require("./affiliates.service");
const create_affiliate_dto_1 = require("./dto/create-affiliate.dto");
const update_affiliate_dto_1 = require("./dto/update-affiliate.dto");
let AffiliatesController = class AffiliatesController {
    constructor(affiliatesService) {
        this.affiliatesService = affiliatesService;
    }
    create(createAffiliateDto) {
        return this.affiliatesService.create(createAffiliateDto);
    }
    findAll() {
        return this.affiliatesService.findAll();
    }
    findOne(id) {
        return this.affiliatesService.findOne(+id);
    }
    update(id, updateAffiliateDto) {
        return this.affiliatesService.update(+id, updateAffiliateDto);
    }
    remove(id) {
        return this.affiliatesService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_affiliate_dto_1.CreateAffiliateDto]),
    __metadata("design:returntype", void 0)
], AffiliatesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AffiliatesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AffiliatesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_affiliate_dto_1.UpdateAffiliateDto]),
    __metadata("design:returntype", void 0)
], AffiliatesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AffiliatesController.prototype, "remove", null);
AffiliatesController = __decorate([
    (0, common_1.Controller)('affiliates'),
    __metadata("design:paramtypes", [affiliates_service_1.AffiliatesService])
], AffiliatesController);
exports.AffiliatesController = AffiliatesController;
//# sourceMappingURL=affiliates.controller.js.map