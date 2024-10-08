import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {UserEntity} from './entities/user.entity';
import { RolesEntity } from 'src/roles/roles.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity,RolesEntity]),
  AuthModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
