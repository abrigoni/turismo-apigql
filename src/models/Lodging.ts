import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Classification, Category, Location } from ".";

@Entity({ name: "alojamientos" })
export class Lodging {

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

  @ManyToOne(type => Category, categoria => categoria.id)
  @JoinColumn({name: "categoria_id"})
  category!: Category;
  
  @ManyToOne(type => Classification, classification => classification.id)
  @JoinColumn({name: "clasificacion_id"})
  classification!: Classification;
  
  @ManyToOne(type => Location, location => location.id)
  @JoinColumn({name: "localidad_id"})
  location!: Location;
}
