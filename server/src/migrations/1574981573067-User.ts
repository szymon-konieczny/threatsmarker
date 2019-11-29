import {MigrationInterface, QueryRunner} from "typeorm";

export class User1574981573067 implements MigrationInterface {
    name = 'User1574981573067'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "email" text NOT NULL, "googleId" text NOT NULL, "facebookId" text NOT NULL, "userInfo" text NOT NULL, "profilePictureUrl" text NOT NULL, "password" text NOT NULL, "role" text NOT NULL, "status" text NOT NULL, "label" text NOT NULL, "isBanned" boolean NOT NULL, "banEnd" integer NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "user"`, undefined);
    }

}
