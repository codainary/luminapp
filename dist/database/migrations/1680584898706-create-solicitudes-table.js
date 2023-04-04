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
exports.createSolicitudesTable1680584898706 = void 0;
class createSolicitudesTable1680584898706 {
    constructor() {
        this.name = 'createSolicitudesTable1680584898706';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE "solicitudes" ("id" SERIAL NOT NULL, "fecha_creacion" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "fecha_actualizacion" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "nro_solicitud" character varying NOT NULL, "direccion_falla" character varying NOT NULL, "telefono_contacto" character varying(20) NOT NULL, "observacion" character varying NOT NULL, "respuesta" character varying NOT NULL, "correo_respuesta" text NOT NULL, "estado" integer NOT NULL, CONSTRAINT "UQ_d3f2fab39635551ca2fca6261b4" UNIQUE ("nro_solicitud"), CONSTRAINT "PK_8c7e99758c774b801853b538647" PRIMARY KEY ("id"))`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`DROP TABLE "solicitudes"`);
        });
    }
}
exports.createSolicitudesTable1680584898706 = createSolicitudesTable1680584898706;
//# sourceMappingURL=1680584898706-create-solicitudes-table.js.map