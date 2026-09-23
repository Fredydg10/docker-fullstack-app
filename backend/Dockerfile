# Paso 1: Usar una imagen base minimalista y segura
FROM node:18-alpine

# Paso 2: Crear un usuario NO ROOT (¡Regla de oro de seguridad!)
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodejs -u 1001 -G nodejs

# Paso 3: Establecer el directorio de trabajo
WORKDIR /app

# Paso 4: Copiar solo lo necesario primero (mejor caché)
COPY package*.json ./

# Paso 5: Instalar dependencias
RUN npm install --production

# Paso 6: Copiar el código de la aplicación
COPY . .

# Paso 7: Cambiar la propiedad al usuario no-root
RUN chown -R nodejs:nodejs /app

# Paso 8: Cambiar al usuario no-root
USER nodejs

# Paso 9: Exponer el puerto
EXPOSE 3000

# Paso 10: Comando para iniciar la aplicación
CMD ["node", "server.js"]
