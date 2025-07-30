# FinanzasPRO

FinanzasPRO es una aplicación web de gestión financiera personal desarrollada como SPA (Single Page Application) utilizando JavaScript, HTML y CSS. Permite a los usuarios registrar, visualizar y filtrar operaciones financieras, así como gestionar su cuenta de usuario.

## Características

- Registro y autenticación de usuarios.
- Visualización de un dashboard con balance, filtros y reportes.
- Gestión de operaciones: agregar, editar y eliminar ingresos/gastos.
- Filtros por tipo, categoría, fecha y ordenamiento.
- Interfaz moderna y responsiva.

## Instalación y ejecución

1. **Clona el repositorio:**

   git clone https://github.com/giselle-01/Finanzas_PRO.git
   cd Develop_Assesment

2. **Instala las dependencias:**
   npm install

3. **Inicia el servidor de desarrollo:**
   npm run dev

4. **Inicia Json Server para la base de datos simulada:**
npx json-server --watch public/database.json --port 3000

5. **Abre la aplicación en tu navegador:**
http://localhost:5173

Collecting workspace information```markdown
# FinanzasPRO

FinanzasPRO es una aplicación web de gestión financiera personal desarrollada como SPA (Single Page Application) utilizando JavaScript, HTML y CSS. Permite a los usuarios registrar, visualizar y filtrar operaciones financieras, así como gestionar su cuenta de usuario.

## Características

- Registro y autenticación de usuarios.
- Visualización de un dashboard con balance, filtros y reportes.
- Gestión de operaciones: agregar, editar y eliminar ingresos/gastos.
- Filtros por tipo, categoría, fecha y ordenamiento.
- Interfaz moderna y responsiva.

## Estructura del proyecto

```
├── public/
│   └── database.json         # Base de datos simulada (JSON Server)
├── src/
│   ├── js/
│   │   ├── api.js            # Módulo para peticiones HTTP
│   │   └── auth.js           # Lógica de autenticación
│   ├── views/
│   │   ├── login.js          # Vista de login
│   │   ├── register.js       # Vista de registro
│   │   ├── dashboard.js      # Vista de dashboard y operaciones
│   │   └── 404.js            # Vista de página no encontrada
│   ├── css/                  # Archivos de estilos CSS
│   ├── styles.css            # Archivo principal de estilos
│   ├── main.js               # Punto de entrada de la app
│   └── router.js             # Enrutador SPA
├── index.html                # HTML principal
├── package.json              # Configuración y scripts de npm
└── README.md                 # Este archivo
```

## Instalación y ejecución

1. **Clona el repositorio:**
   ```sh
   git clone https://github.com/giselle-01/Develop_Assesment.git
   cd Develop_Assesment
   ```

2. **Instala las dependencias:**
   ```sh
   npm install
   ```

3. **Inicia el servidor de desarrollo:**
   ```sh
   npm run dev
   ```

4. **(Opcional) Inicia JSON Server para la base de datos simulada:**
   ```sh
   npx json-server --watch public/database.json --port 3000
   ```

5. **Abre la aplicación en tu navegador:**
   ```
   http://localhost:5173
   ```

## Uso

- Regístrate o inicia sesión con tus credenciales.
- Accede al dashboard para ver tu balance y operaciones.
- Usa los filtros para buscar y ordenar tus movimientos.
- Agrega, edita o elimina operaciones según tus necesidades.
- Cierra sesión cuando termines.

## Tecnologías utilizadas

- JavaScript (ES Modules)
- HTML5 y CSS3
- [Vite](https://vitejs.dev/) para desarrollo y build
- [JSON Server](https://github.com/typicode/json-server) para API simulada

## Licencia

Este proyecto está licenciado bajo la [GNU GPL v3](LICENSE).

Desarrollado por Giselle Andrea Palencia Toro.

