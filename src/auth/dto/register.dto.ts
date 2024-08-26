import { PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';
import { LoginAuthDto } from './login.dto';

export class RegisterAuthDto extends PartialType(LoginAuthDto) {
    @IsNotEmpty()
    @IsNumber()
    role_id: number;
}