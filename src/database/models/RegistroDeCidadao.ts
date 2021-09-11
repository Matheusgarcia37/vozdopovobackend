import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { Denuncia } from './Denuncia'

@Entity()
export class RegistroDeCidadao {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nome: string;

  @Column()
  email: string;

  @Column({ type: 'float' })
  telefone: number;

  @Column()
  endereco: string

  @OneToMany(type => Denuncia, registroDeCidadao => RegistroDeCidadao)
  denuncias: Denuncia

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
