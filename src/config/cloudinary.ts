import { ConfigService } from '@nestjs/config';
import { v2 as cloudinary } from 'cloudinary';

export const configureCloudinary = (configService: ConfigService) => {
  cloudinary.config({
    cloud_name: configService.get('cloudinary.cloud_name'),
    api_key: configService.get('cloudinary.api_key'),
    api_secret: configService.get('cloudinary.api_secret'),
  });
};
