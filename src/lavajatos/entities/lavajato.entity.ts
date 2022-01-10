import { Agenda } from "src/agendas/entities/agenda.entity";
import { User } from "src/users/entities/user.entity";
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne, JoinColumn } from "typeorm";

@Entity()
export class Lavajato {
    @PrimaryGeneratedColumn()
    id: number;

    @Column ('text')
    nomedolavajato: string;

    @Column ('text')
    endereco: string;

    @Column ('text')
    cidade: string;

    @Column ('text')
    telefone: string;

    @Column ('text')
    segundaasexta: string;

    @Column ('text')
    sabado: string;

    @Column ('text')
    agendadeatendimento: string;

    @OneToOne(() => User, user =>  user.lavajato)
    @JoinColumn()
    user: User;

    @OneToMany(() => Agenda, agenda => agenda.lavajato)
    agendas: Agenda[];
}
