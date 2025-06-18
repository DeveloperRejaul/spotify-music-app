import { Module } from '@nestjs/common';
import { UserModule } from './services/user/module';
import { AppController } from './controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './services/user/model';
import { ConfigModule } from '@nestjs/config';
import { MusicModule } from './services/music/module';
import { FavoriteModule } from './services/favorite/module';
import { Music } from './services/music/model';
import { Favorite } from './services/favorite/model';
import { FileModule } from './services/file/module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
      isGlobal: true,
    }),
    
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.HOST,
      port:parseInt(process.env.DATABASE_PORT,10),
      username: process.env.USER_NAME,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      synchronize: true,
      autoLoadModels: true,
      models: [User, Music, Favorite],
    }),
   
    UserModule,
    MusicModule,
    FavoriteModule,
    FileModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
