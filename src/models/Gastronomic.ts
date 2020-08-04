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

  @ManyToMany(type => Activity)
  @JoinTable({name: "actividad_gastronomico"})
  activities!: Activity[];
  
  @ManyToMany(type => Speciality)
  @JoinTable({name: "especialidad_gastronomico"})
  specialities!: Speciality[];

}