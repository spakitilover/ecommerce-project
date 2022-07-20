import { ContactInfo } from 'src/models/contact/entity/contact.entity';
import { Order } from 'src/models/order/entity/order.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @ManyToOne(() => User, (user) => user.directReports, { onDelete: 'SET NULL' })
  manger: User;

  @OneToMany(() => User, (user) => user.manger)
  directReports: User[];

  @OneToOne(() => ContactInfo, (info) => info.user)
  contactInfo: ContactInfo;

  @OneToMany(() => Order, (order) => order.user)
  orders: Order[];
}
