import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class ContactInfo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  phone: string;

  @Column()
  email: string;
}
