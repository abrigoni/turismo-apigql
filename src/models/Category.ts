import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "categorias" })
export class Category {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: "estrellas" })
  stars!: string;

  @Column({ name: "valor" })
  value!: number;
}