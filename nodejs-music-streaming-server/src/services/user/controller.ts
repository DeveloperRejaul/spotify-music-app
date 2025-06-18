import { Controller, Post, Body, Put, Param, Delete, Get, Headers } from '@nestjs/common';
import { UserService } from './service';
import { User } from './model';
import { CreateUserDto, LoginUserDto, UpdateUserDto } from './dto';

@Controller('user')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Get('auth')
  auth(@Headers() headers) {
    return this.service.auth(headers.authorization);
  }

  @Post('login')
  login(@Body() body: LoginUserDto) {
    return this.service.login(body);
  }
  @Get()
  findAll() {
    return this.service.findAll();
  }
  
  @Get(':id')
  find(@Param('id') id) {
    return this.service.find(Number(id));
  }

  
  @Post()
  create(@Body() user: CreateUserDto): Promise<User> {
    return this.service.create(user);
  }

  
  
  @Put(':id')
  update(@Param('id') id , @Body() body: UpdateUserDto) { 
    return this.service.update(Number(id), body);
  }
  
  @Delete(':id')
  delete(@Param('id') id) { 
    return this.service.remove(Number(id));
  }
}
