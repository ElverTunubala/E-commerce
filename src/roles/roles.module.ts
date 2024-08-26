import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { Module } from '@nestjs/common';
import { RolesEntity } from './roles.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([RolesEntity])],
  controllers: [RolesController],
  providers: [RolesService],
})
export class RolesModule {}
