import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './jwt.constants';
import { UserEntity } from '../users/entities/user.entity';
import { RolesEntity } from 'src/roles/roles.entity';
import { JwtAuthService } from './jwt.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity, RolesEntity]),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '240s' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtAuthService],
  exports: [AuthService, JwtModule, JwtAuthService],
})
export class AuthModule {}