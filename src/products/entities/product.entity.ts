import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { Order } from '../../orders/entities/order.entity';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  description: string;

  //un producto puede estar en varios pedidos (muchos a muchos)
  @ManyToMany(() => Order, (order) => order.products)
  orders: Order[];
}

