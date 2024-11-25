import { IsNotEmpty, IsString, IsEmail } from 'class-validator';

export class UserPopulateDto {
  @IsNotEmpty()
  @IsString()
  readonly _id: string;

  @IsNotEmpty()
  @IsString()
  readonly username: string;

  @IsNotEmpty()
  @IsEmail({}, { message: 'Invalid email' })
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  readonly role: string;

  @IsString()
  readonly picture: string;

  @IsNotEmpty()
  @IsString()
  readonly status: string;

  @IsNotEmpty()
  @IsString()
  readonly createdAt: Date;

  @IsNotEmpty()
  @IsString()
  readonly updatedAt: Date;
}
