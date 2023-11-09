import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateCoursesTagsTable1699478648822 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'courses_tags_tags',
        columns: [
          {
            name: 'id',
            type: 'uuid', // postman supports uuid but the extension must be activated (first sql execution)
            isPrimary: true,
            generationStrategy: 'uuid', // it's gonna be generated by postman and not by the entities like the other tables
            default: 'uuid_generate_v4()',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('courses_tags_tags');
  }
}