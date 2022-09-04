import {MigrationInterface, QueryRunner} from "typeorm";

export class fixNotnullColumns1662250995442 implements MigrationInterface {
    name = 'fixNotnullColumns1662250995442'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "events" ALTER COLUMN "badge_uri" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "events" ALTER COLUMN "banner_url" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "events" ALTER COLUMN "banner_url" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "events" ALTER COLUMN "badge_uri" SET NOT NULL`);
    }

}
