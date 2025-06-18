import { existsSync} from 'fs';
import { mkdir } from 'fs/promises';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './module';
import { ValidationPipe } from '@nestjs/common';
import { join } from 'path';

// handle all environments loaded or not loaded
const requireEnv = ['SERVER_PORT','HOST' ,'DATABASE_PORT', 'USER_NAME','PASSWORD','DATABASE'];
const allEnv = new Set(Object.keys(process.env));

const envExists = requireEnv.every(e => allEnv.has(e));
if (!envExists) console.log('Environment variable not found'), process.exit(1);
console.log('Environment variable successfully loaded');


(async () => {
  const port = parseInt(process.env.SERVER_PORT, 10) || 4000;
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  // create upload directory if not created
  const path = join(__dirname, '/upload');
  if (!existsSync(path)) await mkdir(path);
  
  await app.listen(port);
  console.log(`Server running on: http://localhost:${port}`);
})();
