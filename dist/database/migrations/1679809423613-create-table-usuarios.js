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
exports.createTableUsuarios1679809423613 = void 0;
class createTableUsuarios1679809423613 {
    constructor() {
        this.name = 'createTableUsuarios1679809423613';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE "usuarios" ("id" SERIAL NOT NULL, "fecha_creacion" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "fecha_actualizacion" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "usuario" character varying(15) NOT NULL, "contrasena" character varying(255) NOT NULL, "activo" boolean NOT NULL DEFAULT false, CONSTRAINT "UQ_0790a401b9d234fa921e9aa1777" UNIQUE ("usuario"), CONSTRAINT "PK_d7281c63c176e152e4c531594a8" PRIMARY KEY ("id"))`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`DROP TABLE "usuarios"`);
        });
    }
}
exports.createTableUsuarios1679809423613 = createTableUsuarios1679809423613;
//# sourceMappingURL=1679809423613-create-table-usuarios.js.map