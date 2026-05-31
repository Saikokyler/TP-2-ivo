# 🔐 Generador de Contraseñas - TP-2 Serverless

Aplicación web serverless para generar y gestionar contraseñas de 8 dígitos. Desarrollado con **Astro**, autenticación mediante **Supabase** y desplegado en **Vercel**.

## 📋 Requisitos Mínimos

- ✅ Registro de usuario, inicio y cierre de sesión
- ✅ Crear, visualizar y editar contraseñas generadas
- ✅ Persistencia de datos en base de datos en la nube (Supabase)
- ✅ Interfaz responsiva y funcional

## 🛠️ Stack Tecnológico

- **Frontend**: Astro + Tailwind CSS
- **Backend/Auth/BD**: Supabase
- **Deploy**: Vercel
- **Control de versiones**: GitHub (ramas: main, develop, rama-alumno1, mati)

## 🚀 Estructura del Proyecto

```
src/
├── pages/           # Rutas de la aplicación
│   ├── index.astro  # Home
│   ├── login.astro  # Login
│   ├── signup.astro # Registro
│   └── dashboard.astro # Dashboard principal
├── components/      # Componentes reutilizables
└── lib/            # Funciones de utilidad y cliente Supabase
public/             # Archivos estáticos
```

## 🔧 Instalación Local

```bash
# Clonar repositorio
git clone https://github.com/Saikokyler/TP-2-ivo.git
cd TP-2-ivo

# Instalar dependencias
npm install

# Crear archivo .env.local con credenciales Supabase
# SUPABASE_URL=tu_url
# SUPABASE_ANON_KEY=tu_key

# Iniciar servidor de desarrollo
npm run dev

# Acceder a http://localhost:4321
```

## 📦 Comandos Disponibles

| Comando | Acción |
|---------|--------|
| `npm run dev` | Inicia servidor en http://localhost:4321 |
| `npm run build` | Compila para producción |
| `npm run preview` | Vista previa de build |

## 👥 Equipo

- **Alumno 1**: rama `rama-alumno1`
- **Alumno 2 (Mati)**: rama `mati`
- **Develop**: Rama de integración
- **Main**: Versión estable y desplegada

## 📅 Fases de Desarrollo

1. Setup inicial (ACTUAL)
2. Configuración Supabase
3. Autenticación de usuarios
4. Interfaz frontend
5. Lógica del generador de contraseñas
6. Persistencia en BD
7. Deploy a Vercel
8. Testing y refinamiento

## 📝 Notas

- Primera entrega: 30/4 (versión funcional en main)
- Usar Conventional Commits y PRs para integración
- Documentación en README debe mantenerse actualizada
- Defensa oral evaluará decisiones técnicas y complejidad
