import { Controller, Get } from '@nestjs/common';
import { RolesService } from './roles.service';

@Controller('role')
export class RolesController {
  constructor(private rolesService: RolesService) {}
  @Get()
  async getRole() {
    return await this.rolesService.getAllroles();
  }
}