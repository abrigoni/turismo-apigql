import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "especialidades" })
export class Speciality {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: "nombre" })
  name!: string;

}