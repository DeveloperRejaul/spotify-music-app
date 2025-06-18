import { Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import { Service } from './service';

@Controller('favorite')
export class FavoriteController {
  constructor(private readonly service: Service) {}


  @Get('user/:id')
  getFavorites(@Param() {id}) {
    return this.service.getFavorites(id);
  }
  
  @Get(':id')
  getFavorite(@Param() {id}) {
    return this.service.getFavorite(id);
  }
  
  @Delete(':id')
  delete(@Param() {id}) {
    return this.service.delete(id);
  }

  @Post()
  createFavorite(@Body() body) {
    return this.service.create(body);
  }
}
