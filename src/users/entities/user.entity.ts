import { Order } from 'src/orders/entities/order.entity';
import { RolesEntity } from 'src/roles/roles.entity';
import {Entity,Column,PrimaryGeneratedColumn,OneToMany, ManyToOne} from 'typeorm';
@Entity({ name: 'users' })
  export class UserEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;
  
    @Column()
    password: string;
    
    // una persona tiene un rol
    @ManyToOne(() => RolesEntity, (role) => role.users)
    role: RolesEntity;

    @OneToMany(() => Order, (order) => order.user)
    orders: Order[];
}
