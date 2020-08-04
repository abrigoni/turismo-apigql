import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm";
import { Gastronomic } from "./Gastronomic";

@Entity({ name: "actividades" })
export class Activity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: "nombre" })
  name!: string;

  @ManyToMany(type => Gastronomic, gastronomic => gastronomic.activities)
  @JoinTable({
    name: "actividad_gastronomico", 
    joinColumn: { name: "actividad_id" },
    inverseJoinColumn: { name: "gastronomico_id" }
  })
  gastronomics!: Gastronomic[];

}