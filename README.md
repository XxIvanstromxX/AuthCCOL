# AuthCCOL

## Descripción
Curso práctico de autenticación en Node.js dividido en 4 clases progresivas. Cada clase introduce nuevos conceptos de seguridad y autenticación, desde lo básico hasta implementaciones avanzadas con roles y middleware.

## Estructura del Curso

### 📁 Clase_1 - Fundamentos Básicos
Autenticación básica con hash de contraseñas usando bcryptjs.
```
Clase_1/
  ├── app.js                # Servidor Express básico
  ├── config/db.js          # Conexión a MongoDB
  ├── controllers/controllerAuth.js  # Registro y login básico
  ├── models/users.js       # Modelo de usuario
  └── routes/auth.js        # Rutas de autenticación
```

### 📁 Clase_2 - JWT Tokens
Incorpora JWT para manejo de sesiones y autenticación sin estado.
```
Clase_2/
  ├── .env                  # Variables de entorno (JWT_SECRET)
  ├── .http                 # Pruebas HTTP con REST Client
  └── ... (estructura similar a Clase_1 + JWT)
```

### 📁 Clase_3 - Middleware de Autenticación
Añade middleware para proteger rutas privadas.
```
Clase_3/
  ├── middleware/
  │   └── authMiddleware.js # Verificación de tokens
  └── ... (estructura anterior + middleware)
```

### 📁 Clase_4 - Roles y Autorización
Sistema completo con roles de usuario y autorización granular.
```
Clase_4/
  ├── middleware/
  │   ├── authMiddleware.js    # Autenticación
  │   └── authorizateRol.js    # Autorización por roles
  └── ... (estructura completa)
```

## Tecnologías Utilizadas
- **Express.js** - Framework web
- **MongoDB & Mongoose** - Base de datos y ODM
- **bcryptjs** - Hash de contraseñas
- **jsonwebtoken** - Tokens JWT (desde Clase_2)
- **dotenv** - Variables de entorno

## Instalación Rápida
```zsh
# Elige la clase que quieras ejecutar
cd Clase_X

# Instala dependencias
npm install

# Configura variables de entorno (Clase_2 en adelante)
cp .env.example .env  # Si existe

# Ejecuta la aplicación
npm run dev
```

## Progresión del Curso
1. **Clase_1**: Hash de contraseñas y autenticación básica
2. **Clase_2**: Implementación de JWT para sesiones
3. **Clase_3**: Middleware de autenticación para rutas protegidas
4. **Clase_4**: Sistema de roles y autorización avanzada

## Créditos
Desarrollado por **XxIvanstromxX** para el curso de autenticación en Node.js.
