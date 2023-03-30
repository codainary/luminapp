import { MigrationInterface, QueryRunner } from 'typeorm';

export class oneToOneContribuyenteUsuarios1679888372922
  implements MigrationInterface
{
  name = 'oneToOneContribuyenteUsuarios1679888372922';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "contribuyentes" ADD "id_usuario" integer`,
    );
    await queryRunner.query(
      `ALTER TABLE "contribuyentes" ADD CONSTRAINT "UQ_abc7fbad5cc2b175b40c7211f03" UNIQUE ("id_usuario")`,
    );
    await queryRunner.query(
      `ALTER TABLE "contribuyentes" ADD CONSTRAINT "FK_abc7fbad5cc2b175b40c7211f03" FOREIGN KEY ("id_usuario") REFERENCES "usuarios"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "contribuyentes" DROP CONSTRAINT "FK_abc7fbad5cc2b175b40c7211f03"`,
    );
    await queryRunner.query(
      `ALTER TABLE "contribuyentes" DROP CONSTRAINT "UQ_abc7fbad5cc2b175b40c7211f03"`,
    );
    await queryRunner.query(
      `ALTER TABLE "contribuyentes" DROP COLUMN "id_usuario"`,
    );
  }
}
