import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CateGory {
  @PrimaryGeneratedColumn()
  categoryId: number;
}
