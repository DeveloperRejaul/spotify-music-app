import { UUIDV4 } from 'sequelize';
import { Table, Column, Model, HasMany } from 'sequelize-typescript';
import { Favorite } from 'src/services/favorite/model';

@Table
export class User extends Model<User> {

  @Column({defaultValue:UUIDV4(), primaryKey:true})
    id: string;

  @Column({ allowNull: false })
    name: string;

  @Column({ allowNull: false, unique: true })
    email: string;

  @Column({ allowNull: false })
    password: string;
  
  @HasMany(() => Favorite)
    favorites: Favorite[];
  
}
