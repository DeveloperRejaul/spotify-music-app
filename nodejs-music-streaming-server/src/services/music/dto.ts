import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsString, MinLength,MaxLength, Length } from 'class-validator';


export class CreateMusicDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(20)
    name: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(10)
  @MaxLength(100)
    title: string;

  
  @IsString()
  @IsNotEmpty()
  @Length(6)
    color: string;
}
export class UpdateMusicDto extends PartialType(CreateMusicDto) {}


export interface ICreateMusic extends CreateMusicDto { 
  image: string;
  url: string
}