# Proyecto Next.js - Estructura de Carpetas

Este documento describe la estructura de carpetas del proyecto, destacando los archivos y módulos globales (disponibles para toda la aplicación) y los locales (específicos para una sección o funcionalidad).

## Estructura de Carpetas

```plaintext
src
├── app
│   ├── api                              # API handlers (Global)
│   │   └── trpc                         # Sección para tRPC (Global)
│   │       └── [trpc].ts                # Manejador de API para tRPC (Global)
│   │
│   ├── home                             # Sección para la página de destino (Local)
│   │   ├── about                        # Sección para "About Us" (Local)
│   │   │   └── page.tsx                 # Página "About Us" de landing (Loca0l)
│   │   ├── book-our-mobile-bar
│   │   │   └── page.tsx                 # Página para "Book Our Mobile Bar" (Local)
│   │   ├── ecommerce                    # Sección para ecommerce (Local)
│   │   │   ├── layout.tsx               # Layout específico para ecommerce (Local)
│   │   │   └── page.tsx                 # Página principal de ecommerce (Local)
│   │   ├── layout.tsx                   # Layout específico para landing (Local)
│   │   └── page.tsx                     # Página principal de landing (Local)
│   │
│   ├── (auth)                           # Sección para autenticación (Local)
│   │   ├── layout.tsx                   # Layout específico para páginas de auth (Local)
│   │   ├── login
│   │   │   └── page.tsx                 # Página de login (Local)
│   │   └── signup                       # Sección para registro (Local)
│   │       └── page.tsx                 # Página de registro (Local)
│   │
│   ├── dashboard                        # Sección del dashboard (Local)
│   │   ├── products                     # Sección para productos (Local)
│   │   │   └── page.tsx                 # Página de productos para admin (Local)
│   │   ├── users                        # Sección para tabla de usuarios (Local)
│   │   │   └── page.tsx                 # Página de usuarios para admin (Local)
│   │   ├── orders                       # Sección para tabla de órdenes (Local)
│   │   │   └── page.tsx                 # Página de órdenes para admin (Local)
│   │   ├── settings                     # Sección de configuración (Local)
│   │   │   └── page.tsx                 # Página de configuración para admin (Local)
│   │   ├── sales                        # Sección para tabla de ventas (Local)
│   │   │   └── page.tsx                 # Página de ventas para admin (Local)
│   │   ├── layout.tsx                   # Layout común para admin y usuario (Local)
│   │   └── page.tsx                     # Página de inicio para admin (Local)
│   │
│   ├── not-found.tsx
│   ├── layout.tsx                       # Layout raíz para la app, maneja el estado de sesión (Global)
│   └── page.tsx                         # Página principal, renderizado condicional según el estado de login (Global)
│
├── components
│   └── ui                               # Componentes de UI de shadcn (Global)
│
├── features                             # Características organizadas por módulos (Local)
│   ├── auth
│   │   ├── LoginForm.tsx                # Componente de formulario de login (Local)
│   │   └── SignupForm.tsx               # Componente de formulario de registro (Local)
│   │
│   ├── pages
│   │   └── Landing
│   │       └── BookOurMobileBar.tsx     # Página "Book Our Mobile Bar" (Local)
│   │
│   ├── users
│   │   ├── UserList.tsx                 # Componente de lista de usuarios (Local)
│   │   └── UserDetail.tsx               # Componente de detalle de usuario (Local)
│   │
│   └── products
│       ├── ProductList.tsx              # Componente de lista de productos (Local)
│       └── ProductForm.tsx              # Formulario de creación/edición de productos (Local)
│
├── hooks                                # Hooks personalizados (Global)
│   └── useAuth.ts                       # Hook de autenticación con Supabase (Global)
│
├── lib                                  # Configuraciones y utilidades (Global)
│   ├── supabase.ts                      # Configuración de Supabase Client (Global)
│   ├── trpc.ts                          # Configuración de tRPC (Global)
│   └── utils.ts                         # Funciones utilitarias comunes (Global)
│
├── providers                            # Proveedores y contextos (Global)
│   ├── AuthProvider.tsx                 # Proveedor de autenticación con Supabase (Global)
│   ├── ThemeProvider.tsx                # Proveedor de temas (Global)
│   └── QueryClientProvider.tsx          # Proveedor de React Query (Global)
│
├── schema                               # Definiciones de esquemas (Global)
│   ├── UserSchema.ts                    # Definición del esquema de usuario (Global)
│   └── ProductSchema.ts                 # Definición del esquema de producto (Global)
│
├── supabase                             # Configuración y lógica para Supabase (Global)
│   ├── migrations                       # Migraciones para PostgreSQL (Global)
│   ├── functions                        # Funciones remotas de Supabase (Global)
│   │   ├── userManagement.sql           # Lógica SQL para usuarios (Global)
│   │   └── productManagement.sql        # Lógica SQL para productos (Global)
│   └── seed                             # Archivos de inicialización de datos (Global)
│       └── seedData.sql                 # Datos iniciales para la base de datos (Global)
│
└── styles
    └── globals.css                      # Estilos globales (Global)

```

# Dashboard de Cafetería

Este es el **Dashboard de Gestión** para una cafetería. A continuación se presenta la estructura del menú y los módulos disponibles para administrar el negocio.

## Estructura del Menú

```plaintext

menu
├── dashboard
│   ├── home                    # Página de inicio con información general.
│   ├── daily sales             # Visualización de las ventas realizadas en el día actual.
│   ├── top selling products    # Muestra los productos que más se venden en la cafetería.
│   ├── sales performance       # Información detallada sobre el rendimiento de las ventas (diarias, semanales, mensuales).
│   ├── inventory status        # Muestra el estado del inventario en tiempo real, incluyendo productos agotados.
│   ├── employee performance    # Monitoreo del desempeño de los empleados (ventas, horas trabajadas, etc.).
│   ├── customer analysis       # Información sobre los clientes frecuentes, preferencias y tendencias de compra.
│   ├── daily revenue           # Ingresos generados por las ventas durante el día actual.
│   ├── trend analysis          # Análisis de tendencias en ventas, inventario y clientes.
│   ├── actionable insights     # Recomendaciones automáticas basadas en los datos para optimizar las operaciones.
│   ├── audit logs              # Registros de auditoría sobre actividades realizadas en el sistema.
│   ├── access control          # Control de acceso basado en roles y usuarios.
│   ├── two-factor authentication # Implementación de autenticación en dos pasos para mayor seguridad.
│   ├── predictive analytics    # Análisis predictivo de ventas, inventarios y comportamiento de clientes.
│   ├── sustainability metrics  # Métricas de sostenibilidad (uso de recursos, desechos, etc.).
│   ├── customer segmentation   # Segmentación de clientes basada en comportamientos y características.
│   ├── customer loyalty dashboard # Panel de fidelización de clientes con puntos acumulados y redimidos.
│   └── social responsibility initiatives # Iniciativas de responsabilidad social de la cafetería.
├── user management
│   ├── user list               # Lista con todos los usuarios registrados en el sistema.
│   ├── user details            # Detalles de un usuario específico.
│   ├── user permissions        # Control de permisos y roles de cada usuario.
│   ├── role management         # Gestión de los roles definidos en el sistema.
│   ├── assign roles            # Asignación de roles a usuarios específicos.
│   ├── login activity          # Registros y análisis de la actividad de inicio de sesión de los usuarios.
│   ├── session management      # Herramientas para gestionar sesiones de usuario activas.
│   ├── password reset          # Herramientas para restablecer contraseñas de usuarios.
│   ├── user activity logs      # Registro detallado de todas las actividades de los usuarios.
├── store management
│   ├── store info              # Información general sobre la tienda (ubicación, horarios, etc.).
│   ├── inventory management    # Gestión y detalles sobre el inventario de productos.
│   ├── sales report            # Reportes detallados de ventas realizadas en la tienda.
│   ├── store performance       # Gráficos y análisis del rendimiento de la tienda.
│   ├── maintenance logs        # Registros de mantenimiento y reparaciones realizadas en la tienda.
│   ├── supplier performance    # Evaluación del desempeño de proveedores con base en entregas y calidad.
│   ├── external system integrations # Integraciones con sistemas externos (CRM, ERP, contabilidad).
│   └── API management          # Gestión de integraciones a través de API.
├── product management
│   ├── product list            # Lista de todos los productos disponibles.
│   ├── product details         # Detalles de un producto específico.
│   ├── product pricing         # Gestión de precios de los productos.
│   ├── product stock           # Información sobre el stock y la disponibilidad de productos.
│   ├── product categories      # Clasificación de productos por categorías.
│   ├── product variants        # Opciones y variantes de productos disponibles.
├── price management
│   ├── price update            # Formularios para actualizar el precio de los productos.
│   ├── discounts               # Crear y gestionar descuentos o promociones para productos.
│   ├── pricing history         # Histórico de precios y ajustes realizados.
├── vendor management
│   ├── vendor list             # Lista de todos los proveedores que suministran los productos.
│   ├── vendor details          # Detalles sobre un proveedor específico.
│   ├── vendor orders           # Gestión de órdenes de compra realizadas a los proveedores.
│   ├── vendor performance      # Análisis del rendimiento de los proveedores (entregas a tiempo, calidad, etc.).
│   ├── vendor communication    # Herramientas para facilitar la comunicación con proveedores.
├── inventory management
│   ├── inventory list          # Lista de todos los artículos en el inventario.
│   ├── inventory update        # Modificar niveles de inventario y agregar nuevos artículos.
│   ├── inventory status        # Información actualizada sobre el estado del inventario.
│   ├── low stock alerts        # Notificaciones automáticas cuando un producto está cerca de agotarse.
│   ├── inventory forecasting   # Predicciones de inventario basadas en ventas pasadas.
├── procurement
│   ├── purchase orders         # Lista de todas las órdenes de compra realizadas a proveedores.
│   ├── create order            # Formulario para crear nuevas órdenes de compra.
│   ├── order tracking          # Seguimiento del estado de las órdenes de compra.
│   ├── purchase history        # Histórico de compras realizadas.
│   ├── order status alerts     # Alertas sobre el estado de las órdenes de compra.
├── pos (Point of Sale)
│   ├── sales transactions      # Interfaz para procesar transacciones y registrar ventas.
│   ├── sales history           # Visualización del historial de ventas realizadas.
│   ├── payment methods         # Gestión de diferentes métodos de pago disponibles.
│   ├── daily sales summary     # Resumen de las ventas diarias con métricas clave.
│   ├── returns management      # Gestión de devoluciones y reembolsos de productos.
├── customer management
│   ├── customer list           # Lista de todos los clientes registrados en el sistema.
│   ├── customer history        # Historial de compras y transacciones de clientes.
│   ├── customer promotions     # Crear y gestionar promociones personalizadas para clientes.
│   ├── loyalty program         # Gestión de programas de fidelización y recompensas para clientes frecuentes.
│   ├── customer feedback       # Herramientas para recolectar y analizar retroalimentación de clientes.
├── employee management
│   ├── employee list           # Lista de todos los empleados de la cafetería.
│   ├── employee details        # Detalles sobre cada empleado, incluyendo horas trabajadas y rendimiento.
│   ├── employee performance    # Evaluación del rendimiento de los empleados.
│   ├── employee schedule       # Horarios de trabajo de los empleados.
│   ├── payroll management      # Gestión de nóminas y pagos a empleados.
│   ├── staff training          # Registro y seguimiento de la capacitación del personal.
└── reports
    ├── sales reports           # Reportes detallados de ventas (diarias, mensuales, anuales).
    ├── inventory reports       # Reportes sobre el estado del inventario.
    ├── employee performance reports # Reportes sobre la productividad de los empleados.
    ├── product analysis        # Reportes sobre los productos más vendidos y sus tendencias.
    ├── financial reports       # Informes financieros detallados de ingresos y gastos.
    ├── operational reports     # Reportes sobre la eficiencia operativa (tiempos de espera, calidad de servicio, etc.).
    ├── business intelligence   # Herramientas de inteligencia empresarial para análisis predictivo y recomendaciones.
    └── marketing reports       # Reportes sobre campañas de marketing y efectividad.



```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
