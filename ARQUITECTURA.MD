 🏗️ ARQUITECTURA DEL SISTEMA

 📌 1. Descripción General

El sistema consiste en una plataforma web de gestión de tiendas en línea con punto de venta (POS), que permitirá a múltiples usuarios crear y administrar sus propias tiendas virtuales.

El sistema incluirá:
- Gestión de productos
- Gestión de categorías
- Sistema de ventas (POS)
- Autenticación de usuarios
- Panel administrativo



 🧠 2. Tipo de Arquitectura

Se implementará una arquitectura **Cliente-Servidor (Client-Server)** basada en el patrón **MVC (Modelo - Vista - Controlador)**.

 🔹 Capas:

1. Frontend (Vista)
   - Interfaz de usuario
   - Interacción con el cliente
   - Tecnologías: HTML, CSS, JavaScript

2. Backend (Controlador + Lógica)
   - Procesamiento de datos
   - Validaciones
   - Autenticación
   - Tecnologías: PHP

3. Base de Datos (Modelo)
   - Almacenamiento de datos
   - Tecnologías: MySQL



 🧩 3. Modelo del Sistema

 Entidades principales:

- Usuario
- Tienda
- Producto
- Categoría
- Venta
- Detalle de Venta

 Relaciones:

- Un usuario puede tener múltiples tiendas
- Una tienda tiene múltiples productos
- Un producto pertenece a una categoría
- Una venta tiene múltiples productos



 📊 4. Diagramas

🔹 Diagrama de Arquitectura (Conceptual)

Cliente
↓
Servidor Web 
↓
Base de Datos 



 🔹 Flujo de Login

1. Usuario ingresa correo y contraseña
2. Backend valida credenciales
3. Si es correcto:
   - Se crea sesión
   - Redirección al dashboard



 ⚙️ 5. Lógica del Sistema

 🔐 Autenticación
- Login con correo y contraseña
- Control de sesiones
- Protección de rutas

 🛒 Gestión de Productos
- Crear, editar, eliminar productos
- Asociar productos a categorías

 💰 Ventas (POS)
- Selección de productos
- Cálculo automático de total
- Registro de venta





 🧰 7. Stack Tecnológico

 Backend:
- PHP 
- Laravel 

 Frontend:
- HTML
- CSS
- JavaScript

 Base de Datos:
- MySQL

 Herramientas:
- GitHub
- Visual Studio Code



 🚀 8. Justificación del Stack

Se selecciona Laravel debido a:
- Seguridad integrada
- Arquitectura MVC
- Facilidad de escalabilidad

MySQL se usa por:
- Alta compatibilidad
- Rendimiento


 9. Proyección

A futuro el sistema podrá incluir:
- Aplicación móvil
- Integración con pagos online
- API pública
- Dashboard con analítica avanzada
