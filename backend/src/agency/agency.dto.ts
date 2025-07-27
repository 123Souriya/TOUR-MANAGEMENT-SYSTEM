
import { IsAlpha, IsNotEmpty, IsNumberString } from 'class-validator';

export class CreateAgencyDto {
  @IsNotEmpty()
  @IsAlpha()
  name: string;

  @IsNotEmpty()
  @IsNumberString()
  nid: string;
}