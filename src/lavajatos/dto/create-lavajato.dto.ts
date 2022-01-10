import { IsNotEmpty } from "class-validator";
import { Lavajato } from "../entities/lavajato.entity";
import { User } from "src/users/entities/user.entity";

export class CreateLavajatoDto {

    @IsNotEmpty()
    readonly nomedolavajato: string;
  
    @IsNotEmpty()
    readonly endereco: string;

    @IsNotEmpty()
    readonly cidade: string;

    @IsNotEmpty()
    readonly telefone: string;

    @IsNotEmpty()
    readonly segundaasexta: string;

    @IsNotEmpty()
    readonly sabado: string;
  
    @IsNotEmpty()
    readonly agendadeatendimento: string;
    
    @IsNotEmpty()
    readonly user: User;
}
