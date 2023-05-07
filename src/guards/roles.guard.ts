import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';


@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector) {}
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const roles = this.reflector.get('roles', context.getHandler());
        if(!roles) {
            return true
        }
        const request = context.switchToHttp().getRequest();
        const userRole = request.headers.user;

        return matchRoles(roles, userRole);
    }
}

function matchRoles(rolesArray: string[], role: string): boolean{
    return rolesArray.includes(role);
}
