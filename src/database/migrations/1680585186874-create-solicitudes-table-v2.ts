import { MigrationInterface, QueryRunner } from 'typeorm';

export class createSolicitudesTableV21680585186874 implements MigrationInterface {
  name = 'createSolicitudesTableV21680585186874';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "solicitudes" ALTER COLUMN "estado" SET DEFAULT '0'`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "solicitudes" ALTER COLUMN "estado" DROP DEFAULT`);
  }
}
