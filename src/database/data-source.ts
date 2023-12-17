import { DataSource } from 'typeorm';
import { join } from 'path';

const PostgresDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'base',
  entities: [join(`${__dirname}/**/models/**/*.entity.{ts,js}`)],
  migrationsRun: true,
  migrationsTransactionMode: 'each',
  migrations: [join(`${__dirname}/**/migrations/*.{ts,js}`)],
});

export { PostgresDataSource };
