import { Controller, Post, Put, Delete, Get, Body, Param, UseInterceptors, UploadedFiles, ParseFilePipeBuilder, HttpStatus} from '@nestjs/common';
import { MusicService } from './service';
import { CreateMusicDto, UpdateMusicDto } from './dto';
import {FilesInterceptor } from '@nestjs/platform-express';

const MEX_FILE_SIZE = 50 * 1024 * 1024;
@Controller('music')
export class MusicController {
  constructor(private readonly service: MusicService) {}

  @Post()
  @UseInterceptors(FilesInterceptor('file'))
  async createMusic(
  @UploadedFiles(
    new ParseFilePipeBuilder()
      .addMaxSizeValidator({ maxSize: MEX_FILE_SIZE })
      .build({ errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY })
  ) file: Express.Request, @Body() body: CreateMusicDto) {

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    return this.service.create(file, body);

  }
  

  @Get()
  getMusic() { 
    return this.service.get();
  }
  
  @Delete(':id')
  deleteMusic(@Param() {id}) { 
    return this.service.delete(+id);
  }
  
  @Put(':id')
  updateMusic(@Param() {id}, @Body() body: UpdateMusicDto) { 
    return this.service.update(+id, body);
  }
}
