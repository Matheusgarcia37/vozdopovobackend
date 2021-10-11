import {MigrationInterface, QueryRunner} from "typeorm";

export class creatingDb1633811420249 implements MigrationInterface {
    name = 'creatingDb1633811420249'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user_prefeitura" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying NOT NULL, "login" character varying NOT NULL, "senha" character varying NOT NULL, "cidadeId" uuid NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "PK_104a688dbcfef442fb79169445f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "cidade" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "PK_9fefdadd1d47000e7fa6d2abc8c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "comentarios_de_denuncia" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "mensagem" character varying NOT NULL, "authenticated" boolean NOT NULL, "denunciaId" uuid NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "PK_d2ffaccf97990ede1a85c4850f9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "registro_de_cidadao" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying NOT NULL, "email" character varying NOT NULL, "telefone" double precision NOT NULL, "endereco" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "PK_acc90e5dbea81571507a72b9e10" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "denuncia_status_enum" AS ENUM('aberto', 'fechado', 'resolvido')`);
        await queryRunner.query(`CREATE TABLE "denuncia" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "token" character varying, "titulo" character varying NOT NULL, "descricao" character varying NOT NULL, "status" "denuncia_status_enum" NOT NULL DEFAULT 'aberto', "cidadeId" uuid, "cidadaoId" uuid, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "PK_722033870edaaa2f8db39158536" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "arquivo" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "url" character varying NOT NULL, "denunciaId" uuid NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "PK_956a4593ecc7963784e642c1b10" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "user_prefeitura" ADD CONSTRAINT "FK_a29e3eaa6370424b2639c697b7a" FOREIGN KEY ("cidadeId") REFERENCES "cidade"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comentarios_de_denuncia" ADD CONSTRAINT "FK_ef51eb4e22f3cc70af7921685b8" FOREIGN KEY ("denunciaId") REFERENCES "denuncia"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "denuncia" ADD CONSTRAINT "FK_19679da8098d7291a00784870b5" FOREIGN KEY ("cidadeId") REFERENCES "cidade"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "denuncia" ADD CONSTRAINT "FK_a7554bab33025b3e7afb13a45b6" FOREIGN KEY ("cidadaoId") REFERENCES "registro_de_cidadao"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "arquivo" ADD CONSTRAINT "FK_127e8dedc567a5a08b7cdecc24a" FOREIGN KEY ("denunciaId") REFERENCES "denuncia"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "arquivo" DROP CONSTRAINT "FK_127e8dedc567a5a08b7cdecc24a"`);
        await queryRunner.query(`ALTER TABLE "denuncia" DROP CONSTRAINT "FK_a7554bab33025b3e7afb13a45b6"`);
        await queryRunner.query(`ALTER TABLE "denuncia" DROP CONSTRAINT "FK_19679da8098d7291a00784870b5"`);
        await queryRunner.query(`ALTER TABLE "comentarios_de_denuncia" DROP CONSTRAINT "FK_ef51eb4e22f3cc70af7921685b8"`);
        await queryRunner.query(`ALTER TABLE "user_prefeitura" DROP CONSTRAINT "FK_a29e3eaa6370424b2639c697b7a"`);
        await queryRunner.query(`DROP TABLE "arquivo"`);
        await queryRunner.query(`DROP TABLE "denuncia"`);
        await queryRunner.query(`DROP TYPE "denuncia_status_enum"`);
        await queryRunner.query(`DROP TABLE "registro_de_cidadao"`);
        await queryRunner.query(`DROP TABLE "comentarios_de_denuncia"`);
        await queryRunner.query(`DROP TABLE "cidade"`);
        await queryRunner.query(`DROP TABLE "user_prefeitura"`);
    }

}
