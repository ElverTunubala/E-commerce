import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import { RolesEntity } from 'src/roles/roles.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,

    @InjectRepository(RolesEntity)
    private readonly roleRepository: Repository<RolesEntity>,
  ) {}

  async create(createUserDto: CreateUserDto){
    const role = await this.roleRepository.findOne({ where: { id: createUserDto.role_id } });
    if (!role) {
      throw new NotFoundException('Role not found');
    }

    const newUser = this.userRepository.create({ ...createUserDto, role });
    return this.userRepository.save(newUser);
  }

  async findAll(){
    // return this.userRepository.find({ relations: ['role', 'orders'] });  con esto trae usuarios, el rol y el orders
    return this.userRepository.find(); // con esto solo el usuario
  }

  async findOne(id: number){
    const user = await this.userRepository.findOne({ where: { id }, relations: ['role', 'orders'] });
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.preload({ id, ...updateUserDto });
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    if (updateUserDto.role_id) {
      const role = await this.roleRepository.findOne({ where: { id: updateUserDto.role_id } });
      if (!role) {
        throw new NotFoundException('Role not found');
      }
      user.role = role;
    }

    return this.userRepository.save(user);
  }

  async remove(id: number) {
    const user = await this.findOne(id);
    await this.userRepository.remove(user);
  }

}
