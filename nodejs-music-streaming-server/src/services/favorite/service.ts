import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Favorite } from './model';
import { Music } from 'src/services/music/model';

@Injectable()
export class Service {
  constructor(
    @InjectModel(Favorite)
    private readonly model: typeof Favorite,
  ) { }
    
  async create(body) { 
    const exists = await this.model.findOne({
      where: { userId: body.userId, musicId: body.musicId },
    });
    
    if (exists) throw new HttpException('Music already exists', HttpStatus.BAD_REQUEST);

    const favorite = new Favorite(body);
    return await favorite.save();
  }


  async getFavorites(id: string) {
    const favorite = await this.model.findAll({
      where: { userId: id }, include: { model: Music}
    });
    return favorite.map(fav => fav.music);
  }


  async getFavorite(id: string) {
    const res = await this.model.findOne({ where: { musicId: id } });
    if (res == null) throw new HttpException('Music Not exists', HttpStatus.BAD_REQUEST);
    return res;
  }

  async delete(id: string) {
    return await this.model.destroy({ where: { musicId: id} });
  }
}