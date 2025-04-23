import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { File } from './entities/file.entity';

@Injectable()
export class FileService {
  constructor(@InjectModel(File) private fileModule: typeof File) {}

  create(file: Express.Multer.File) {
    return this.fileModule.create({ name: file.filename, path: file.path });
  }

  remove(id: number) {
    return this.fileModule.update(
      { deleted_at: new Date() },
      {
        where: {
          id: id,
        },
      },
    );
  }
}
