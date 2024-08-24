import { IsNumber } from 'class-validator';
import { RegisterDto } from 'src/auth/dto/register.dto';

export class CreateUserDto extends RegisterDto {

    @IsNumber()
    public id: number;

}
