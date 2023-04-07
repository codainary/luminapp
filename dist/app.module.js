"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const Joi = require("joi");
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const http_exception_filter_1 = require("./common/filters/http-exception.filter");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const logger_middleware_1 = require("./common/middlewares/logger.middleware");
const enviroments_1 = require("./config/enviroments");
const usuarios_module_1 = require("./modules/usuarios/usuarios.module");
const db_exception_filter_1 = require("./common/filters/db-exception.filter");
const typeorm_config_1 = require("./database/typeorm.config");
const contribuyentes_module_1 = require("./modules/contribuyentes/contribuyentes.module");
const auth_module_1 = require("./modules/auth/auth.module");
const solicitudes_module_1 = require("./modules/solicitudes/solicitudes.module");
const configuration_1 = require("./config/configuration");
const env_validation_1 = require("./config/env.validation");
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(logger_middleware_1.LoggerMiddleware).forRoutes('*');
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                ignoreEnvFile: process.env.NODE_ENV !== 'production' ? false : true,
                load: [configuration_1.default],
                cache: true,
                validate: env_validation_1.validate,
                envFilePath: enviroments_1.enviroments[process.env.NODE_ENV] || '.dev.env',
                validationSchema: Joi.object({
                    DATABASE_NAME: Joi.string().required(),
                    DATABASE_USERNAME: Joi.string().required(),
                    DATABASE_PASSWORD: Joi.string().required(),
                    DATABASE_HOST: Joi.string().required(),
                    DATABASE_PORT: Joi.number().required(),
                    SOLICITUDES_CONSECUTIVO: Joi.number().required(),
                    EXPRESS_SESSION: Joi.string().required(),
                }),
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                useClass: typeorm_config_1.TypeOrmConfigService,
            }),
            usuarios_module_1.UsuariosModule,
            contribuyentes_module_1.ContribuyentesModule,
            auth_module_1.AuthModule,
            solicitudes_module_1.SolicitudesModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
            {
                provide: core_1.APP_FILTER,
                useClass: http_exception_filter_1.HttpExceptionFilter,
            },
            {
                provide: core_1.APP_FILTER,
                useClass: db_exception_filter_1.DatabaseExceptionFilter,
            },
            typeorm_config_1.TypeOrmConfigService,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map