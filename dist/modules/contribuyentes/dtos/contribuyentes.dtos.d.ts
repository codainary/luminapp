export declare class CreateContribuyenteDto {
    readonly cedula: string;
    readonly primerNombre: string;
    readonly segundoNombre: string;
    readonly primerApellido: string;
    readonly segundoApellido: string;
    readonly telefono: string;
    readonly correo: string;
    readonly direccion: string;
}
declare const UpdateContribuyenteDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateContribuyenteDto>>;
export declare class UpdateContribuyenteDto extends UpdateContribuyenteDto_base {
}
export {};
