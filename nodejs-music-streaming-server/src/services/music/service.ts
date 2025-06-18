import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Music } from './model';
import { InjectModel } from '@nestjs/sequelize';
import type { ICreateMusic, UpdateMusicDto } from './dto';
import { saveFile } from 'src/utils/file';
import type { IFileType } from 'src/types/fileTypes';

@Injectable()
export class MusicService {
  constructor(
    @InjectModel(Music)
    private readonly model: typeof Music,
  ) { }
    
  async get() { 
    return await this.model.findAll();  
  }
   
  // only support file types [ image/*, audio/* ]
  async create(file: IFileType[], body: ICreateMusic) {
    
    console.log(file);
    console.log(body);
    
    
    const audio = file[0];
    const image = file[1];
    if (audio.mimetype.includes('audio') && image.mimetype.includes('image')) { 
      const audioFileName = await saveFile(audio);
      const imageFileName = await saveFile(image);
      body.image = imageFileName;
      body.url = audioFileName;
      const music = new Music(body);
      return await music.save();
    }
    throw new HttpException('Something went wrong', HttpStatus.BAD_REQUEST);
  }
  
  
  async update(id: number, body: UpdateMusicDto) { 
    return await this.model.update(body, { where: {id} ,returning: true });
  }

  async delete(id: number) {
    return this.model.destroy({ where: {id} });
  }
}