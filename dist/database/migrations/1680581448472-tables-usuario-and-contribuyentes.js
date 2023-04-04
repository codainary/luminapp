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
exports.tablesUsuarioAndContribuyentes1680581448472 = void 0;
class tablesUsuarioAndContribuyentes1680581448472 {
    constructor() {
        this.name = 'tablesUsuarioAndContribuyentes1680581448472';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE "usuarios" ("id" SERIAL NOT NULL, "fecha_creacion" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "fecha_actualizacion" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "usuario" character varying(15) NOT NULL, "contrasena" character varying(255) NOT NULL, "rol" integer NOT NULL DEFAULT '0', "id_cntrbynte" integer, CONSTRAINT "UQ_0790a401b9d234fa921e9aa1777" UNIQUE ("usuario"), CONSTRAINT "REL_7c409357a9c091ac17ff9c4e57" UNIQUE ("id_cntrbynte"), CONSTRAINT "PK_d7281c63c176e152e4c531594a8" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "contribuyentes" ("id" SERIAL NOT NULL, "fecha_creacion" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "fecha_actualizacion" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "cedula" character varying(20) NOT NULL, "primer_nombre" character varying(15) NOT NULL, "segundo_nombre" character varying(15) NOT NULL, "primer_apellido" character varying(15) NOT NULL, "segundo_apellido" character varying(15) NOT NULL, "telefono" character varying(20) NOT NULL, "correo" character varying NOT NULL, "direccion" character varying NOT NULL, CONSTRAINT "UQ_36e857d888e35614fda458e3708" UNIQUE ("cedula"), CONSTRAINT "PK_73f9d4604a97547590280315a3f" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`ALTER TABLE "usuarios" ADD CONSTRAINT "FK_7c409357a9c091ac17ff9c4e57a" FOREIGN KEY ("id_cntrbynte") REFERENCES "contribuyentes"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "usuarios" DROP CONSTRAINT "FK_7c409357a9c091ac17ff9c4e57a"`);
            yield queryRunner.query(`DROP TABLE "contribuyentes"`);
            yield queryRunner.query(`DROP TABLE "usuarios"`);
        });
    }
}
exports.tablesUsuarioAndContribuyentes1680581448472 = tablesUsuarioAndContribuyentes1680581448472;
//# sourceMappingURL=1680581448472-tables-usuario-and-contribuyentes.js.map