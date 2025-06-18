import { Module } from '@nestjs/common';
import { FileController } from './controller';

@Module({
  controllers: [FileController],
})
export class FileModule {}
