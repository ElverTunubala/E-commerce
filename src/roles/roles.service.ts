import { Injectable } from '@nestjs/common';
import { RolesEntity } from './roles.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(RolesEntity)
    private readonly rolesRepository: Repository<RolesEntity>,
  ) {}
  async getAllroles() {
    return await this.rolesRepository.find();
  }
}
