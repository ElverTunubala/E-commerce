import {Entity,Column,PrimaryGeneratedColumn,ManyToOne,OneToMany} from 'typeorm';

  
  @Entity({ name: 'users' })
  export class UserEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;
  
    @Column()
    password: string;

    @Column()
    role: boolean;

    @OneToMany(() => Order, (order) => order.user)
    orders: Order[];
  
}
