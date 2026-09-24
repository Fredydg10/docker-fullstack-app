🚀 DevOps Fullstack Project

Descripción
Proyecto Fullstack (Node.js + Nginx + PostgreSQL) completamente dockerizada, con pipeline de CI/CD automatizado, manifiestos de Kubernetes y stack de monitoreo en tiempo real. Este proyecto demuestra las mejores prácticas de Infraestructura como Código (IaC) y seguridad en contenedores.

Tecnologías Utilizadas 
1- Contenedores:Docker & Docker Compose
2- Orquestación:Kubernetes (Minikube)
3- CI/CD:GitHub Actions
4- Monitoreo & Logs:Prometheus, Grafana, Loki & Promtail
5- Seguridad:Trivy (Escaneo de vulnerabilidades), Usuario no-root, Gestión de secretos con `.env`
6- IaC:Terraform

⚡Cómo ejecutar localmente?
1. Clona el repositorio:[URL DE TU GITHUB REMOTE] [URL UBICACIÓN DE TU CARPETA]
2. Configura tus variables de entorno:
   ```bash
   cp .env.example .env
   # Edita el archivo .env con tus credenciales

3. Levanta la aplicacion con la aplicacion docker con este comando
	   "docker compose up -d"

*Guarda y sal: `Ctrl + O`, `Enter`, `Ctrl + X`*


Accede a la aplicación:
Frontend: http://localhost:8080
Backend API: http://localhost:3000/api
Grafana (Monitoreo): http://localhost:3000 (user: admin, pass: admin123)

🛡️ Seguridad y Mejores Prácticas Aplicadas
✅ Las imágenes de Docker se construyen con usuario no-root.
✅ Los secretos nunca se suben al repositorio (.env está en .gitignore).
✅ Pipeline de CI/CD con escaneo automático de vulnerabilidades (Trivy).
✅ Límites de recursos (mem_limit) configurados en Docker Compose para evitar fugas de memoria.

PASO FINAL: SUBIR EL PORTAFOLIO A GITHUB

Ahora vamos a guardar esta obra de arte en tu repositorio.

```bash
git init
git add .
git commit " :"
git push

Listo,Tendras tu proyecto subido al github! :)

Autor:Fredy Villarreal 	Github:Fredydg10 Devops Junior/Fullstack Developer
