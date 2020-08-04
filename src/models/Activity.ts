import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "actividades" })
export class Activity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: "nombre" })
  name!: string;

}