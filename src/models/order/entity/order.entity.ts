import { User } from 'src/models/users/entity/users.entity';
import { Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

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

  @ManyToOne(() => User, (user) => user.orders, { onDelete: 'SET NULL' })
  user: User;
}
