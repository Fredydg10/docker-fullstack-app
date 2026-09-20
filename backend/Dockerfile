# Paso 1: Usar una imagen base de Node.js (versión ligera)
FROM node:18-alpine

# Paso 2: Crear un directorio de trabajo dentro del contenedor
WORKDIR /app

# Paso 3: Copiar los archivos de dependencias
COPY package*.json ./

# Paso 4: Instalar las dependencias (express, cors)
RUN npm install

# Paso 5: Copiar todo el código del backend al contenedor
COPY . .

# Paso 6: Exponer el puerto 3000
EXPOSE 3000

# Paso 7: Comando para iniciar el servidor
CMD ["npm", "start"]
