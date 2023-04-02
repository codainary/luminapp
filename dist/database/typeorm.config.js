"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmConfigAsync = exports.typeOrmModuleOptions = void 0;
const config_1 = require("@nestjs/config");
const typeorm_1 = require("typeorm");
const dotenv_1 = require("dotenv");
const enviroments_1 = require("../config/enviroments");
(0, dotenv_1.config)();
const typeOrmModuleOptions = (configService = new config_1.ConfigService()) => ({
    type: 'postgres',
    host: configService.get('DATABASE_HOST'),
    port: configService.get('DATABASE_PORT'),
    username: configService.get('DATABASE_USERNAME'),
    password: configService.get('DATABASE_PASSWORD'),
    database: configService.get('DATABASE_NAME'),
    entities: ['dist/**/*.entity.js'],
});
exports.typeOrmModuleOptions = typeOrmModuleOptions;
exports.typeOrmConfigAsync = {
    imports: [config_1.ConfigModule],
    inject: [config_1.ConfigService],
    useFactory: (configService) => __awaiter(void 0, void 0, void 0, function* () {
        return (Object.assign(Object.assign({}, (0, exports.typeOrmModuleOptions)(configService)), { autoLoadEntities: true, synchronize: enviroments_1.enviroments[process.env.NODE_ENV] === 'production' ? false : true, migrationsRun: false, logging: enviroments_1.enviroments[process.env.NODE_ENV] === 'production' ? false : true }));
    }),
};
exports.default = new typeorm_1.DataSource(Object.assign(Object.assign({}, (0, exports.typeOrmModuleOptions)()), { migrations: ['dist/database/migrations/*.js'] }));
//# sourceMappingURL=typeorm.config.js.map