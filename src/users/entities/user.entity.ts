import { Agenda } from "src/agendas/entities/agenda.entity";
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";

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
    
    @Column ({unique: true})
    email: string;

    @Column ('text')
    password: string;

    @OneToMany(() => Agenda, agenda => agenda.user)
    agendas: Agenda[];
}
