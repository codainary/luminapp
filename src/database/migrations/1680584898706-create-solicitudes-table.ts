import { MigrationInterface, QueryRunner } from 'typeorm';

export class createSolicitudesTable1680584898706 implements MigrationInterface {
  name = 'createSolicitudesTable1680584898706';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "solicitudes" ("id" SERIAL NOT NULL, "fecha_creacion" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "fecha_actualizacion" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "nro_solicitud" character varying NOT NULL, "direccion_falla" character varying NOT NULL, "telefono_contacto" character varying(20) NOT NULL, "observacion" character varying NOT NULL, "respuesta" character varying NOT NULL, "correo_respuesta" text NOT NULL, "estado" integer NOT NULL, CONSTRAINT "UQ_d3f2fab39635551ca2fca6261b4" UNIQUE ("nro_solicitud"), CONSTRAINT "PK_8c7e99758c774b801853b538647" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "solicitudes"`);
  }
}
