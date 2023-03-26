import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'root',
  password: 'root',
  database: 'test',
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/database/migrations/*.js'],
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
