import { Agenda } from "src/agendas/entities/agenda.entity";
import { Lavajato } from "src/lavajatos/entities/lavajato.entity";
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column ('text')
    nome: string;

    @Column ('text')
    telefone: string;

    @Column ('text')
    endereco: string;

    @Column ('text')
    insta: string;
    
    @Column ({unique: true})
    email: string;

    @Column ('text')
    password: string;

    @OneToOne(() => Lavajato, lavajato =>  lavajato.user, {
        eager: true
    })
    lavajato : Lavajato;

    @OneToMany(() => Agenda, agenda => agenda.user)
    agendas: Promise<Agenda[]>;
}
