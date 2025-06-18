import { Module } from '@nestjs/common';
import { MusicController } from './controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Music } from './model';
import { MusicService } from './service';

@Module({
  imports: [
    SequelizeModule.forFeature([Music]),
  ],
  controllers: [MusicController],
  providers:[MusicService]
})
export class MusicModule {}
