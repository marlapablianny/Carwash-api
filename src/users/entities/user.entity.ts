import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

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
}
