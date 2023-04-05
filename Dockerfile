# Imagen de Node 16
#FROM node:16-alpine 
FROM node:17-alpine

# Directorio del proyecto
WORKDIR /app

COPY package.json .

# Instalar dependencias
RUN npm i

# Copiar archivos de la aplicación
COPY . .

# EXPOSE 8080:5000

# Ejecutar el servidor
CMD [ "npm", "run", "dev" ]