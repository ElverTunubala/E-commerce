import { IsBoolean, IsString } from 'class-validator';

export class RegisterDto {
    
    @IsString()
    public email: string;

    @IsString()
    password: string;

    @IsBoolean()
    role: boolean;
}
