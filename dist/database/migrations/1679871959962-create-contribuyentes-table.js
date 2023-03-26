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
exports.createContribuyentesTable1679871959962 = void 0;
class createContribuyentesTable1679871959962 {
    constructor() {
        this.name = 'createContribuyentesTable1679871959962';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE "contribuyentes" ("id" SERIAL NOT NULL, "fecha_creacion" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "fecha_actualizacion" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "cedula" character varying(20) NOT NULL, "primer_nombre" character varying(15) NOT NULL, "segundo_nombre" character varying(15) NOT NULL, "primer_apellido" character varying(15) NOT NULL, "segundo_apellido" character varying(15) NOT NULL, "telefono" character varying(20) NOT NULL, "correo" character varying NOT NULL, "direccion" character varying NOT NULL, CONSTRAINT "UQ_36e857d888e35614fda458e3708" UNIQUE ("cedula"), CONSTRAINT "PK_73f9d4604a97547590280315a3f" PRIMARY KEY ("id"))`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`DROP TABLE "contribuyentes"`);
        });
    }
}
exports.createContribuyentesTable1679871959962 = createContribuyentesTable1679871959962;
//# sourceMappingURL=1679871959962-create-contribuyentes-table.js.map