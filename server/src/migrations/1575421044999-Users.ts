import {MigrationInterface, QueryRunner} from "typeorm";

export class Users1575421044999 implements MigrationInterface {
    name = 'Users1575421044999'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(100) NOT NULL, "email" character varying NOT NULL, "googleId" character varying, "facebookId" character varying, "userInfo" character varying, "profilePictureUrl" character varying, "password" character varying NOT NULL, "role" character varying NOT NULL, "status" character varying NOT NULL, "label" character varying, "banEnd" integer, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "users"`, undefined);
    }

}
