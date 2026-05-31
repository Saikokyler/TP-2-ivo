Generador de Contraseñas - TP-2 Serverless

Aplicación web serverless para generar y gestionar contraseñas de 8 dígitos de forma segura. Desarrollado con Astro, autenticación y base de datos en Supabase, y desplegado en Vercel para máxima disponibilidad.

Requisitos Cumplidos

✅ Autenticación: Registro, login y logout de usuarios  
✅ CRUD Completo: Generar, guardar, ver y eliminar contraseñas  
✅ Persistencia: Base de datos en la nube (Supabase)  
✅ Seguridad: Row Level Security (RLS) en BD  
✅ Interfaz: UI responsiva y funcional  
✅ Deploy: Aplicación en producción en Vercel  

Stack Tecnológico

Fronten: Astro
Styling: CSS nativo
Backend/Auth: Supabase
Database: PostgreSQL en Supabase
Deploy: Vercel

Características Principales

Autenticación de Usuarios
- Registro con email y contraseña
- Login seguro con sesiones
- Logout con limpieza de cookies
- Protección de rutas (solo usuarios autenticados acceden a dashboard)

Generador de Contraseñas
- Genera contraseñas de 8 dígitos aleatorios
- Copiar al portapapeles con 1 click
- Interfaz limpia e intuitiva

Historial de Contraseñas
- Guardar contraseñas generadas
- Ver todas las contraseñas guardadas por usuario
- Mostrar fecha y hora de creación
- Eliminar contraseñas individuales
- Solo cada usuario puede ver sus propias contraseñas (RLS)

Seguridad
- Tokens JWT manejados por Supabase
- Row Level Security en BD
- Variables de entorno protegidas
- CORS configurado correctamente

Seguridad: Row Level Security (RLS)

Las contraseñas están protegidas a nivel de BD. Solo el usuario autenticado puede:
- Ver sus propias contraseñas
- Insertar contraseñas nuevas
- Actualizar sus contraseñas
- Eliminar sus contraseñas

Deploy en Vercel: la aplicación está desplegada automáticamente en Vercel

Decisiones Técnicas

¿Por qué Astro?
Excelente para SSR (Server-Side Rendering)
Soporta TypeScript nativo
Rendering por defecto estático, con server cuando lo necesitamos
Bundle size pequeño
Fácil de desplegar en Vercel

¿Por qué Supabase?
Backend + Auth + BD en una sola plataforma
PostgreSQL nativo (escalable)
Row Level Security para seguridad
API REST y Realtime
Tier gratuito generoso para desarrollo

¿Por qué Vercel?
Deploy automático desde GitHub
Edge Functions para APIs serverless
Escalabilidad automática
Excelente soporte para Astro
Analytics y monitoring incluidos

¿Por qué contraseñas de 8 dígitos?
Fácil de usar pero suficientemente segura (100M combinaciones)
Fácil de copiar/memorizar