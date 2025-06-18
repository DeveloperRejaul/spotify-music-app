import { Module } from '@nestjs/common';
import { FavoriteController } from './controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Favorite } from './model';
import { Service } from './service';

@Module({
  imports: [
    SequelizeModule.forFeature([Favorite]),
  ],
  controllers: [FavoriteController],
  providers:[Service]
})
export class FavoriteModule {}
