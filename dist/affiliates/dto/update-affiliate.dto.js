"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAffiliateDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_affiliate_dto_1 = require("./create-affiliate.dto");
class UpdateAffiliateDto extends (0, mapped_types_1.PartialType)(create_affiliate_dto_1.CreateAffiliateDto) {
}
exports.UpdateAffiliateDto = UpdateAffiliateDto;
//# sourceMappingURL=update-affiliate.dto.js.map