# 📸 API Upload Images with Cloudinary

Esta API permite la carga y recuperación de imágenes utilizando [Cloudinary](https://cloudinary.com/) con **NestJS**.
 

## 🚀 Instalación

1. Clona el repositorio:
   ```
   git clone https://github.com/ivancidev/nestjs-file-upload.git
   cd upload-images-multer
    ```
2. Instala las dependencias:
   ```
   npm install
    ```
3. Configura tus credenciales en .env
El archivo .env.example contiene las variables 
Create una cuenta en [Cloudinary](https://cloudinary.com/) para obtener los valores de las variables.necesarias:
   ```
    PORT=4000
    CLOUDINARY_CLOUD_NAME='your-cloud-name'
    CLOUDINARY_API_KEY='your-api-key'
    CLOUDINARY_API_SECRET='your-api-secret'
    ```
4. Incia servidor:
    ```
    npm run start
    ```
  

📌 **Ver documentación completa en Postman:**  
🔗 [Acceder a la API en Postman](https://documenter.getpostman.com/view/28694004/2sAYdmmU19)

## 📂 Endpoints

### 🚀 Subir una imagen
`POST /upload`  
Sube una nueva imagen y devuelve la URL pública.

### 📸 Obtener una imagen
`GET https://res.cloudinary.com/dwemd9x66/image/upload/v1741275268/uploads/{nombre_image}.png`  
Obtiene una imagen almacenada en Cloudinary.

---
📢 **Nota:** Esta documentación es de solo lectura y no permite modificaciones.