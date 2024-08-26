import { Entity, PrimaryGeneratedColumn, ManyToOne, ManyToMany, JoinTable, Column } from 'typeorm';
import { UserEntity } from '../../users/entities/user.entity';
import { Product } from '../../products/entities/product.entity';

@Entity('orders')
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => UserEntity, (user) => user.orders)
  user: UserEntity;

  @ManyToMany(() => Product, (product) => product.orders)
  @JoinTable()
  products: Product[];

  @Column()
  totalPrice: number;
}

