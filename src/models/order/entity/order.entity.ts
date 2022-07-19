import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: string;

  @Column()
  productId: string;

  @Column()
  amount: number;

  @Column()
  total: number | string;
}
