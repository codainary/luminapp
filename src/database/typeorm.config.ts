// import { DataSource } from 'typeorm';
// import { ConfigService } from '@nestjs/config';

// const createDataSource = async (configService: ConfigService): Promise<DataSource> => {
//   const dataSource = new DataSource({
//     type: 'postgres',
//     host: configService.get('DATABASE_HOST'),
//     port: configService.get('DATABASE_PORT'),
//     username: configService.get('DATABASE_USERNAME'),
//     password: configService.get('DATABASE_PASSWORD'),
//     database: configService.get('DATABASE_NAME'),
//     entities: [__dirname + '/../**/*.entity{.ts,.js}'],
//   });

//   await dataSource.initialize();

//   return dataSource;
// };

// export default createDataSource(new ConfigService());
import { ConfigService, ConfigModule } from '@nestjs/config';
import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { DataSource, DataSourceOptions } from 'typeorm';
import { config } from 'dotenv';
import { enviroments } from 'src/config/enviroments';

config();

export const typeOrmModuleOptions = (configService: ConfigService = new ConfigService()): DataSourceOptions => ({
  type: 'postgres',
  host: configService.get<string>('DATABASE_HOST'),
  port: configService.get<number>('DATABASE_PORT'),
  username: configService.get<string>('DATABASE_USERNAME'),
  password: configService.get<string>('DATABASE_PASSWORD'),
  database: configService.get<string>('DATABASE_NAME'),
  entities: ['dist/**/*.entity.js'],
});

export const typeOrmConfigAsync: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (configService: ConfigService) => ({
    ...typeOrmModuleOptions(configService),
    autoLoadEntities: true,
    synchronize: enviroments[process.env.NODE_ENV] === 'production' ? false : true,
    migrationsRun: false,
    logging: enviroments[process.env.NODE_ENV] === 'production' ? false : true,
  }),
};

export default new DataSource({
  ...typeOrmModuleOptions(),
  migrations: ['dist/database/migrations/*.js'],
});
