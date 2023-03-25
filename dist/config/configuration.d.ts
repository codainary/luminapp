declare const _default: (() => {
    database: {
        name: string;
        username: string;
        password: string;
        host: string;
        port: number;
    };
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    database: {
        name: string;
        username: string;
        password: string;
        host: string;
        port: number;
    };
}>;
export default _default;
