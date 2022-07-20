import { CateGory } from 'src/models/category/entity/category.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Products {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  description: string;

  @Column()
  title: string;

  @Column()
  productImage: string;

  @ManyToMany(() => CateGory, (category) => category.product)
  category: CateGory[];
}
