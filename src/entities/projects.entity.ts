import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({ nullable: true })
  file: string; // Ruta del archivo almacenado en el sistema de archivos
}
