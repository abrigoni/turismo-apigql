import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "localidades" })
export class Location {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: "nombre" })
  name!: string;

}