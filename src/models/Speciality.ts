import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm";
import { Gastronomic } from "./Gastronomic";

@Entity({ name: "especialidades" })
export class Speciality {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: "nombre" })
  name!: string;

  @ManyToMany(type => Gastronomic, gastronomic => gastronomic.specialities)
  @JoinTable({
    name: "actividad_gastronomico", 
    joinColumn: { name: "especialidad_id" },
    inverseJoinColumn: { name: "gastronomico_id" }
  })
  gastronomics!: Gastronomic[];
}