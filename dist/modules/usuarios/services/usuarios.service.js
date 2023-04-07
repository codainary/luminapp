"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
exports.UsuariosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const usuario_entity_1 = require("../entities/usuario.entity");
const contribuyentes_service_1 = require("../../contribuyentes/services/contribuyentes.service");
let UsuariosService = class UsuariosService {
    constructor(usuarioRepo, contribuyentesServices) {
        this.usuarioRepo = usuarioRepo;
        this.contribuyentesServices = contribuyentesServices;
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const newUsuario = this.usuarioRepo.create(data);
            if (data.contribuyenteId) {
                const contribuyente = yield this.contribuyentesServices.findOne(data.contribuyenteId);
                newUsuario.contribuyente = contribuyente;
            }
            return this.usuarioRepo.save(newUsuario);
        });
    }
    findAll() {
        return this.usuarioRepo.find({
            relations: ['contribuyente'],
        });
    }
    findOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuario = yield this.usuarioRepo.findOneBy({ id });
            if (!usuario) {
                throw new common_1.NotFoundException(`Usuario #${id} no encontrado`);
            }
            return usuario;
        });
    }
    update(id, changes) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuario = yield this.findOne(id);
            return this.usuarioRepo.save(Object.assign(Object.assign({}, usuario), { changes }));
        });
    }
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuario = yield this.findOne(id);
            return this.usuarioRepo.remove(usuario);
        });
    }
    findOneByUsername(usuario) {
        return __awaiter(this, void 0, void 0, function* () {
            const findUsuario = yield this.usuarioRepo.find({
                where: {
                    usuario,
                },
            });
            if (!findUsuario) {
                throw new common_1.NotFoundException(`Usuario no encontrado`);
            }
            return findUsuario;
        });
    }
    findOneById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const findUsuario = yield this.usuarioRepo.find({
                where: {
                    id,
                },
            });
            if (!findUsuario) {
                throw new common_1.NotFoundException(`Usuario ${id} no encontrado`);
            }
            return findUsuario;
        });
    }
};
UsuariosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(usuario_entity_1.Usuario)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        contribuyentes_service_1.ContribuyentesService])
], UsuariosService);
exports.UsuariosService = UsuariosService;
//# sourceMappingURL=usuarios.service.js.map