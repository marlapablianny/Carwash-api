import { IsNotEmpty } from "class-validator";
import { Lavajato } from "src/lavajatos/entities/lavajato.entity";
import { User } from "src/users/entities/user.entity";

export class CreateAgendaDto {

    @IsNotEmpty()
    readonly lavajato: Lavajato;

    @IsNotEmpty()
    readonly user: User;

    @IsNotEmpty()
    readonly data: string;

    @IsNotEmpty()
    readonly hora: string;
}
