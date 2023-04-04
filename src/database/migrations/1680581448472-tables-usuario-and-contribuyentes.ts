import { MigrationInterface, QueryRunner } from "typeorm";

export class tablesUsuarioAndContribuyentes1680581448472 implements MigrationInterface {
    name = 'tablesUsuarioAndContribuyentes1680581448472'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "usuarios" ("id" SERIAL NOT NULL, "fecha_creacion" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "fecha_actualizacion" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "usuario" character varying(15) NOT NULL, "contrasena" character varying(255) NOT NULL, "rol" integer NOT NULL DEFAULT '0', "id_cntrbynte" integer, CONSTRAINT "UQ_0790a401b9d234fa921e9aa1777" UNIQUE ("usuario"), CONSTRAINT "REL_7c409357a9c091ac17ff9c4e57" UNIQUE ("id_cntrbynte"), CONSTRAINT "PK_d7281c63c176e152e4c531594a8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "contribuyentes" ("id" SERIAL NOT NULL, "fecha_creacion" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "fecha_actualizacion" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "cedula" character varying(20) NOT NULL, "primer_nombre" character varying(15) NOT NULL, "segundo_nombre" character varying(15) NOT NULL, "primer_apellido" character varying(15) NOT NULL, "segundo_apellido" character varying(15) NOT NULL, "telefono" character varying(20) NOT NULL, "correo" character varying NOT NULL, "direccion" character varying NOT NULL, CONSTRAINT "UQ_36e857d888e35614fda458e3708" UNIQUE ("cedula"), CONSTRAINT "PK_73f9d4604a97547590280315a3f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "usuarios" ADD CONSTRAINT "FK_7c409357a9c091ac17ff9c4e57a" FOREIGN KEY ("id_cntrbynte") REFERENCES "contribuyentes"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "usuarios" DROP CONSTRAINT "FK_7c409357a9c091ac17ff9c4e57a"`);
        await queryRunner.query(`DROP TABLE "contribuyentes"`);
        await queryRunner.query(`DROP TABLE "usuarios"`);
    }

}
