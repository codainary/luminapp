import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class createSolicitudesTableV21680585186874 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
