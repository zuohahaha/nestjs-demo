import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  sex: string;

  @Column()
  birthday: string;

}