/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString, IsEmpty, IsNumber } from 'class-validator';

export class CreateBookDto {

    @IsEmpty({message: 'You cannot provide id.'})
    id: string

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsNotEmpty()
  @IsString()
  author: string;
}
