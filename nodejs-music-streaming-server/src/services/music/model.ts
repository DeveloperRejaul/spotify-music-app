import { UUIDV4 } from 'sequelize';
import { Table, Column, Model, HasMany } from 'sequelize-typescript';
import { Favorite } from 'src/services/favorite/model';

@Table
export class Music extends Model<Music> {
  @Column({defaultValue:UUIDV4(), primaryKey:true})
    id: string;
  
  @Column({ allowNull: false })
    name: string;

  @Column({ allowNull: false})
    title: string;

  @Column({ allowNull: false })
    image: string;
  
  @Column({ allowNull: false })
    color: string;
  
  @Column({ allowNull: false })
    url: string;
  
  @HasMany(() => Favorite)
    favorites: Favorite[];
}
