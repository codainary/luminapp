import { CanActivate, ExecutionContext } from '@nestjs/common';
export declare class AuthenticateGuard implements CanActivate {
    canActivate(context: ExecutionContext): Promise<any>;
}
