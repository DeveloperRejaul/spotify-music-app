import { Controller, Get, Param, StreamableFile } from '@nestjs/common';
import { createReadStream } from 'fs';
import { join } from 'path';

@Controller('file')
export class FileController {

  @Get(':id')
  getFile(@Param() { id }: {id: string}) {
    const ext = id.split('.').pop();
    const imageExt = ['jpeg', 'jpg', 'png'];
    
    const file = createReadStream(join(process.cwd(), 'dist', 'upload', id));
    return new StreamableFile(file, {
      type: imageExt.includes(ext) ? 'image/*' : 'audio/*',
      disposition: `attachment; filename="${id}"`,
    });
  }
}
