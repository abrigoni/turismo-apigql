import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm";
import { Speciality } from "./Speciality";
import { Activity } from "./Activity";

@Entity({ name: "gastronomicos" })
export class Gastronomic {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: "nombre" })
  name!: string;

  @Column({ name: "domicilio" })
  address!: string;

  @Column()
  lat!: number;

  @Column()
  lng!: number;

  @Column({ name: "localidad_id" })
  locationId!: number;

  @ManyToMany(type => Activity, activity => activity.gastronomics)
  @JoinTable({
    name: "actividad_gastronomico", 
    joinColumn: { name: "gastronomico_id", referencedColumnName: "id"},
    inverseJoinColumn: { name: "actividad_id", referencedColumnName: "id"}
  })
  activities!: Activity[];
  
  @ManyToMany(type => Speciality)
  @JoinTable({
    name: "especialidad_gastronomico",
    joinColumn: { name: "gastronomico_id" },
    inverseJoinColumn: { name: "especialidad_id" }
  })
  specialities!: Speciality[];

}