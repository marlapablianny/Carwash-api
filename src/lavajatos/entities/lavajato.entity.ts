import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Lavajato {
    @PrimaryGeneratedColumn()
    id: number;

    @Column ('text')
    nomedolavajato: string;

    @Column ('text')
    endereco: string;

    @Column ('text')
    telefone: string;

    @Column ('text')
    horario: string;

    @Column ('text')
    agendadeatendimento: string;
}
