import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, JoinColumn, ManyToOne } from "typeorm";
import { Speciality } from "./Speciality";
import { Activity } from "./Activity";
import { Location } from ".";

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
  
  @Column({ name: "foto" })
  picture!: string;

  @ManyToOne(type => Location, location => location.id)
  @JoinColumn({ name: "localidad_id" })
  location!: Location;

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