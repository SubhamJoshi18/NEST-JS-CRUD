import { IsString } from 'class-validator';

export class createBodyTdo {
  @IsString()
  content: string;
}
