import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "clasificaciones" })
export class Classification {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: "nombre" })
  name!: string;
}