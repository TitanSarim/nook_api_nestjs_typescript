/* eslint-disable prettier/prettier */
import { IsString, IsEmpty, IsNumber, IsOptional } from 'class-validator';

export class UpdateBookDto {

    @IsEmpty({message: 'You cannot provide id.'})
    id: string

  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsNumber()
  price: number;

  @IsOptional()
  @IsString()
  author: string;
}
