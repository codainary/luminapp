import { MigrationInterface, QueryRunner } from "typeorm";

export class cambiosTablaUsuarios1680232633514 implements MigrationInterface {
    name = 'cambiosTablaUsuarios1680232633514'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contribuyentes" DROP CONSTRAINT "FK_abc7fbad5cc2b175b40c7211f03"`);
        await queryRunner.query(`ALTER TABLE "usuarios" DROP COLUMN "activo"`);
        await queryRunner.query(`ALTER TABLE "contribuyentes" DROP CONSTRAINT "UQ_abc7fbad5cc2b175b40c7211f03"`);
        await queryRunner.query(`ALTER TABLE "contribuyentes" DROP COLUMN "id_usuario"`);
        await queryRunner.query(`ALTER TABLE "usuarios" ADD "role" integer NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "usuarios" ADD "id_cntrbynte" integer`);
        await queryRunner.query(`ALTER TABLE "usuarios" ADD CONSTRAINT "UQ_7c409357a9c091ac17ff9c4e57a" UNIQUE ("id_cntrbynte")`);
        await queryRunner.query(`ALTER TABLE "usuarios" ADD CONSTRAINT "FK_7c409357a9c091ac17ff9c4e57a" FOREIGN KEY ("id_cntrbynte") REFERENCES "contribuyentes"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "usuarios" DROP CONSTRAINT "FK_7c409357a9c091ac17ff9c4e57a"`);
        await queryRunner.query(`ALTER TABLE "usuarios" DROP CONSTRAINT "UQ_7c409357a9c091ac17ff9c4e57a"`);
        await queryRunner.query(`ALTER TABLE "usuarios" DROP COLUMN "id_cntrbynte"`);
        await queryRunner.query(`ALTER TABLE "usuarios" DROP COLUMN "role"`);
        await queryRunner.query(`ALTER TABLE "contribuyentes" ADD "id_usuario" integer`);
        await queryRunner.query(`ALTER TABLE "contribuyentes" ADD CONSTRAINT "UQ_abc7fbad5cc2b175b40c7211f03" UNIQUE ("id_usuario")`);
        await queryRunner.query(`ALTER TABLE "usuarios" ADD "activo" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "contribuyentes" ADD CONSTRAINT "FK_abc7fbad5cc2b175b40c7211f03" FOREIGN KEY ("id_usuario") REFERENCES "usuarios"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

}
