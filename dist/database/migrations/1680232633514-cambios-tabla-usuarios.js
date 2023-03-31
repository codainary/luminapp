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
exports.cambiosTablaUsuarios1680232633514 = void 0;
class cambiosTablaUsuarios1680232633514 {
    constructor() {
        this.name = 'cambiosTablaUsuarios1680232633514';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "contribuyentes" DROP CONSTRAINT "FK_abc7fbad5cc2b175b40c7211f03"`);
            yield queryRunner.query(`ALTER TABLE "usuarios" DROP COLUMN "activo"`);
            yield queryRunner.query(`ALTER TABLE "contribuyentes" DROP CONSTRAINT "UQ_abc7fbad5cc2b175b40c7211f03"`);
            yield queryRunner.query(`ALTER TABLE "contribuyentes" DROP COLUMN "id_usuario"`);
            yield queryRunner.query(`ALTER TABLE "usuarios" ADD "role" integer NOT NULL DEFAULT '0'`);
            yield queryRunner.query(`ALTER TABLE "usuarios" ADD "id_cntrbynte" integer`);
            yield queryRunner.query(`ALTER TABLE "usuarios" ADD CONSTRAINT "UQ_7c409357a9c091ac17ff9c4e57a" UNIQUE ("id_cntrbynte")`);
            yield queryRunner.query(`ALTER TABLE "usuarios" ADD CONSTRAINT "FK_7c409357a9c091ac17ff9c4e57a" FOREIGN KEY ("id_cntrbynte") REFERENCES "contribuyentes"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "usuarios" DROP CONSTRAINT "FK_7c409357a9c091ac17ff9c4e57a"`);
            yield queryRunner.query(`ALTER TABLE "usuarios" DROP CONSTRAINT "UQ_7c409357a9c091ac17ff9c4e57a"`);
            yield queryRunner.query(`ALTER TABLE "usuarios" DROP COLUMN "id_cntrbynte"`);
            yield queryRunner.query(`ALTER TABLE "usuarios" DROP COLUMN "role"`);
            yield queryRunner.query(`ALTER TABLE "contribuyentes" ADD "id_usuario" integer`);
            yield queryRunner.query(`ALTER TABLE "contribuyentes" ADD CONSTRAINT "UQ_abc7fbad5cc2b175b40c7211f03" UNIQUE ("id_usuario")`);
            yield queryRunner.query(`ALTER TABLE "usuarios" ADD "activo" boolean NOT NULL DEFAULT false`);
            yield queryRunner.query(`ALTER TABLE "contribuyentes" ADD CONSTRAINT "FK_abc7fbad5cc2b175b40c7211f03" FOREIGN KEY ("id_usuario") REFERENCES "usuarios"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        });
    }
}
exports.cambiosTablaUsuarios1680232633514 = cambiosTablaUsuarios1680232633514;
//# sourceMappingURL=1680232633514-cambios-tabla-usuarios.js.map