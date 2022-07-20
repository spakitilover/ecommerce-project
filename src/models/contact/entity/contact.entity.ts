import { User } from 'src/models/users/entity/users.entity';
import { Column, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

export class ContactInfo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  phone: string;

  @Column()
  email: string;

  @Column()
  userId: number;

  @OneToOne(() => User, (user) => user.contactInfo, { onDelete: 'CASCADE' })
  @JoinColumn()
  user: User;
}
