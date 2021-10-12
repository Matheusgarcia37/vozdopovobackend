import {MigrationInterface, QueryRunner} from "typeorm";

export class novosatributos1634043771492 implements MigrationInterface {
    name = 'novosatributos1634043771492'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."registro_de_cidadao" ADD "cep" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."registro_de_cidadao" ADD "numero" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."registro_de_cidadao" ADD "bairro" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."registro_de_cidadao" ADD "complemento" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."registro_de_cidadao" DROP COLUMN "complemento"`);
        await queryRunner.query(`ALTER TABLE "public"."registro_de_cidadao" DROP COLUMN "bairro"`);
        await queryRunner.query(`ALTER TABLE "public"."registro_de_cidadao" DROP COLUMN "numero"`);
        await queryRunner.query(`ALTER TABLE "public"."registro_de_cidadao" DROP COLUMN "cep"`);
    }

}
