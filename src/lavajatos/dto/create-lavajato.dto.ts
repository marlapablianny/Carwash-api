import { IsNotEmpty } from "class-validator";

export class CreateLavajatoDto {

    @IsNotEmpty()
    readonly nomedolavajato: string;
  
    @IsNotEmpty()
    readonly endereco: string;

    @IsNotEmpty()
    readonly telefone: string;
  
    @IsNotEmpty()
    readonly horarios: string;
  
    @IsNotEmpty()
    readonly agendadeatendimento: string;

}
