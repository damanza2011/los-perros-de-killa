# Los Perros de Cordero Killa — Web App

Aplicación web oficial de **Los Perros de Cordero Killa** (100% Cordero Gourmet en Barranquilla), construida con React 19, TypeScript, Vite y Tailwind CSS v4.

---

## 🚀 Desarrollo Local

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Iniciar servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

3. **Verificar tipos y compilar:**
   ```bash
   npm run lint
   npm run build
   ```

---

## 🌐 Opciones de Despliegue en la Web

El proyecto está preconfigurado para compilar con rutas relativas (`base: './'`), lo que significa que el directorio generado `dist/` funciona sin problemas en cualquier proveedor:

### 1. Despliegue en Vercel (Recomendado)
- Instala la CLI de Vercel con `npm i -g vercel` y corre `vercel` en la raíz, o
- Sube tu repositorio a GitHub y conéctalo en [vercel.com](https://vercel.com).
- Se ha incluido automáticamente el archivo `vercel.json` para gestionar las rutas SPA.

### 2. Despliegue en Netlify
- Arrastra la carpeta `dist/` a [app.netlify.com/drop](https://app.netlify.com/drop), o
- Conecta tu repositorio Git en Netlify.
- Se ha incluido el archivo `netlify.toml` preconfigurado con el comando de build (`npm run build`) y carpeta de publicación (`dist`).

### 3. Despliegue en GitHub Pages
- Se ha incluido el workflow automatizado en `.github/workflows/deploy.yml`.
- Al subir el repositorio a GitHub:
  1. Ve a **Settings** > **Pages** en tu repositorio de GitHub.
  2. En **Build and deployment** > **Source**, selecciona **GitHub Actions**.
  3. Cada vez que hagas `git push`, se compilará y desplegará automáticamente.

### 4. Servidor propio / Hosting tradicional (cPanel, Nginx, Apache)
- Ejecuta `npm run build`.
- Sube el contenido de la carpeta `dist/` directamente a tu directorio web (`public_html` o `www`).
