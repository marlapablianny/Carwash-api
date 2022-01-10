import { IsEmail, IsNotEmpty } from "class-validator"
import { Lavajato } from "src/lavajatos/entities/lavajato.entity";
import { User } from "../entities/user.entity";
export class CreateUserDto {
    
    @IsNotEmpty()
    readonly nome: string;
  
    @IsNotEmpty()
    readonly endereco: string;

    @IsNotEmpty()
    readonly insta: string;
  
    @IsNotEmpty()
    readonly telefone: string;
  
    @IsEmail()
    readonly email: string;
  
    @IsNotEmpty()
    readonly password: string;

    @IsNotEmpty()
    readonly lavajato: Lavajato;

    @IsNotEmpty()
    readonly user: User;

}
