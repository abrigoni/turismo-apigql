import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";

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

  @Column({name: "localidad_id"})
  locationId!: number;

  @Column({ name: "clasificacion_id" })
  classificationId!: number;

  @Column({ name: "categoria_id" })
  categoryId!: number;

}
