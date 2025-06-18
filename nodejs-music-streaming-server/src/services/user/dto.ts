import { PartialType } from '@nestjs/mapped-types';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @MinLength(5)
    name: string;

  @IsEmail()
    email: string;

  @IsNotEmpty()
  @MinLength(6)
    password: string;
}

export class LoginUserDto {
  @IsEmail()
    email: string;

  @IsNotEmpty()
  @MinLength(6)
    password: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
