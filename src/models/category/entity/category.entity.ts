import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CateGory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
