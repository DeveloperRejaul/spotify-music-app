import { UUIDV4 } from 'sequelize';
import { Table, Column, Model, BelongsTo, ForeignKey} from 'sequelize-typescript';
import { Music } from 'src/services/music/model';
import { User } from 'src/services/user/model';


@Table
export class Favorite extends Model<Favorite> {
  @Column({defaultValue: UUIDV4(), primaryKey:true})
    id: string;
  
  @ForeignKey(() => User)
  @Column
    userId: string;

  @BelongsTo(() => User)
    user: User;

  @ForeignKey(() => Music)
  @Column
    musicId: string;

  @BelongsTo(() => Music)
    music: Music;
}
