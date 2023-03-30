"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.oneToOneContribuyenteUsuarios1679888372922 = void 0;
class oneToOneContribuyenteUsuarios1679888372922 {
    constructor() {
        this.name = 'oneToOneContribuyenteUsuarios1679888372922';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "contribuyentes" ADD "id_usuario" integer`);
            yield queryRunner.query(`ALTER TABLE "contribuyentes" ADD CONSTRAINT "UQ_abc7fbad5cc2b175b40c7211f03" UNIQUE ("id_usuario")`);
            yield queryRunner.query(`ALTER TABLE "contribuyentes" ADD CONSTRAINT "FK_abc7fbad5cc2b175b40c7211f03" FOREIGN KEY ("id_usuario") REFERENCES "usuarios"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "contribuyentes" DROP CONSTRAINT "FK_abc7fbad5cc2b175b40c7211f03"`);
            yield queryRunner.query(`ALTER TABLE "contribuyentes" DROP CONSTRAINT "UQ_abc7fbad5cc2b175b40c7211f03"`);
            yield queryRunner.query(`ALTER TABLE "contribuyentes" DROP COLUMN "id_usuario"`);
        });
    }
}
exports.oneToOneContribuyenteUsuarios1679888372922 = oneToOneContribuyenteUsuarios1679888372922;
//# sourceMappingURL=1679888372922-one-to-one-contribuyente-usuarios.js.map