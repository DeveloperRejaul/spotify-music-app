import { createWriteStream } from 'fs';
import { join } from 'path';
import type { IFileType } from 'src/types/fileTypes';
import { random } from './random';

export const saveFile = (file: IFileType) => { 
  const ext = file.originalname.split('.').pop();
  const fileName = `${random()}.${ext}`;
  const uploadPath = join(__dirname, '..', 'upload', fileName);
  const writeStream = createWriteStream(uploadPath);

  return new Promise((
    resolve: (value: string) => void,
    reject: (reason?: boolean) => void
  ) => {
    writeStream.write(file.buffer, (error) => {
      if (error) {
        reject(false);
      } else {
        writeStream.end(() => {
          resolve(fileName);
        });
      }
    });
  });
};