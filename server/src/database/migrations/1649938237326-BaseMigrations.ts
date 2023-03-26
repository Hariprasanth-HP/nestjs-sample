import { MigrationInterface, QueryRunner } from 'typeorm';

export class BaseMigrations1649938237326 implements MigrationInterface {
  name = 'BaseMigrations1649938237326';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE hari (
        PersonID int,
        LastName varchar(255),
        FirstName varchar(255),
        Address varchar(255),
        City varchar(255)
    );`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`hari\``);
  }
}
