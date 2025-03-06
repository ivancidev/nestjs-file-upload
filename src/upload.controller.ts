import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { v2 as cloudinary } from 'cloudinary';
import { ConfigService } from '@nestjs/config';
import { configureCloudinary } from './config/cloudinary';

@Controller('upload')
export class UploadController {
  constructor(private configService: ConfigService) {
    configureCloudinary(this.configService);
  }
  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    try {
      const result = await cloudinary.uploader.upload(file.path, {
        folder: 'uploads',
      });

      return { imageUrl: result.secure_url };
    } catch (error) {
      console.error('Error al subir imagen:', error);
      throw new Error('Error al subir imagen');
    }
  }
}
