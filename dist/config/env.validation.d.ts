declare enum Environment {
    Development = "development",
    Production = "production",
    Test = "test",
    Provision = "provision"
}
declare class EnvironmentVariables {
    NODE_ENV: Environment;
    PORT: number;
}
export declare function validate(config: Record<string, unknown>): EnvironmentVariables;
export {};
