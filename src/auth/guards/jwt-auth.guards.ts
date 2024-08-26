// import {CanActivate,ExecutionContext,Injectable,UnauthorizedException,
// } from '@nestjs/common';
//   import { JwtService } from '@nestjs/jwt';
//   import { jwtConstants } from '../jwt.constants';
//   import { Request } from 'express';
  
// @Injectable()
// export class AuthGuard implements CanActivate { //Si el método canActivate retorna true, la ruta es accesible; si retorna false, se deniega el acceso.
//   constructor(private jwtService: JwtService) {}

//   async canActivate(context: ExecutionContext): Promise<boolean> {
//     const request = context.switchToHttp().getRequest();
//     const token = this.extractTokenFromHeader(request);//obtener el token JWT del encabezado de autorización de la solicitud
//     if (!token) {
//       throw new UnauthorizedException();
//     }
//     try {
//       const payload = await this.jwtService.verifyAsync(token, {
//         secret: jwtConstants.secret,
//       });
//       request['user'] = payload;
//     } catch {
//       throw new UnauthorizedException();
//     }
//     return true;
//   }

//   private extractTokenFromHeader(request: Request): string | undefined {
//     const [type, token] = request.headers.authorization?.split(' ') ?? [];
//     //Si no hay un encabezado de autorización, retorna un array vacío ([]).
//     return type === 'Bearer' ? token : undefined;
//   }
// }


import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { JwtAuthService } from '../jwt.service'; 
import { Request } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {//Si el método canActivate retorna true, la ruta es accesible; si retorna false, se deniega el acceso.
  constructor(private authService: JwtAuthService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<Request>();
    const token = this.authService.extractTokenFromHeader(request);//obtener el token JWT del encabezado de autorización de la solicitud
    if (!token) {
      throw new UnauthorizedException();
    }
    const payload = await this.authService.verifyToken(token);
    request['user'] = payload;
    return true;
  }
}
