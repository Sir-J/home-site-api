import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddAdminUser1546100542515 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(
            `INSERT INTO users (fullname, login, password) VALUES ("admin", "admin", "Password123")`,
        );
        // console.log('1');
        await queryRunner.query(
            `INSERT INTO claims (name) VALUES ("full_access")`,
        );

        await queryRunner.query(
            `INSERT INTO usersClaims (userId, claimId)
                VALUES ((select id from users where login="admin"), (select id from claims where name="full_access"))`,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(
            `DELETE FROM users WHERE login="admin"`,
        );
        await queryRunner.query(
            `DELETE FROM claims WHERE name="full_access"`,
        );
    }
}
