import { MigrationInterface, QueryRunner } from 'typeorm';

export class createContribuyentesTable1679871959962
  implements MigrationInterface
{
  name = 'createContribuyentesTable1679871959962';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "contribuyentes" ("id" SERIAL NOT NULL, "fecha_creacion" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "fecha_actualizacion" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "cedula" character varying(20) NOT NULL, "primer_nombre" character varying(15) NOT NULL, "segundo_nombre" character varying(15) NOT NULL, "primer_apellido" character varying(15) NOT NULL, "segundo_apellido" character varying(15) NOT NULL, "telefono" character varying(20) NOT NULL, "correo" character varying NOT NULL, "direccion" character varying NOT NULL, CONSTRAINT "UQ_36e857d888e35614fda458e3708" UNIQUE ("cedula"), CONSTRAINT "PK_73f9d4604a97547590280315a3f" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "contribuyentes"`);
  }
}
