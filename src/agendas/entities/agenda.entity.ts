import { Lavajato } from "src/lavajatos/entities/lavajato.entity";
import { User } from "src/users/entities/user.entity";
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinColumn, CreateDateColumn, ManyToOne } from "typeorm";

@Entity()
export class Agenda {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Lavajato, lavajato => lavajato.agendas)
    lavajato: Lavajato;

    @ManyToOne(() => User, user => user.agendas)
    @JoinColumn()
    user: User;

    @Column()
    data: string;
    
    @Column()
    hora: string;

}
