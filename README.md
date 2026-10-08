🚀 NASA APOD App

Aplicación móvil desarrollada con React Native + Expo que utiliza la API de NASA (APOD) para mostrar la imagen astronómica del día junto con su título y descripción.

La aplicación tiene un fondo personalizado, muestra la información obtenida desde NASA y organiza el código en diferentes componentes para que sea más fácil de mantener y entender.

---

📱 ¿De qué trata la aplicación?

Esta API proporciona información sobre una imagen astronómica seleccionada por NASA. Entre los datos que devuelve se encuentran:

* 🖼️ Imagen del día.
* 📝 Título de la imagen.
* 📖 Explicación o descripción.
* 🔗 URL de la imagen.
* 📅 Fecha de publicación, entre otros datos.

🛠️ Tecnologías utilizadas

React Native

permite crear aplicaciones móviles utilizando JavaScript y componentes de React.

Expo

facilita el desarrollo de aplicaciones con React Native.

JavaScript

El lenguaje utilizado para programar la aplicación 

 API de NASA

Es la API de donde se obtiene la información astronómica. Entre los datos que devuelve se encuentran el título, la URL de la imagen y la explicación.

StyleSheet
Se utilizó StyleSheet de React Native para agregar los estilos de la aplicació


# 📁 Estructura del proyecto

La estructura utilizada es aproximadamente:

```text
proyecto/
│
├── app/
│   ├── _layout.jsx
│   └── index.jsx
│
├── components/
│   ├── imagen.jsx
│   ├── descripcion.jsx
│   └── titulo.jsx
│
├── hooks/
│   └── api.js
│
├── assets/
│   └── fondo.jpg
│
├── .env
├── package.json
└── README.md
```

Cada carpeta tiene una función diferente.

-assets: contiene las imágenes utilizadas en la aplicación.
-components: contiene los componentes de título, imagen y descripción.
-hooks: contiene el código encargado de consultar la API.
-index.jsx: es la pantalla principal y se encarga de juntar todos los componentes.

---

¿Cómo se obtienen los datos?
  La aplicación utiliza un hook llamado useApi, que realiza la consulta a la API de NASA.


🔑 API Key
Para poder utilizar la API de NASA es necesario tener una API Key.

La clave se guarda en un archivo .env para no colocarla directamente dentro del código:

EXPO_PUBLIC_API_KEY=TU_API_KEY
El archivo .env debe agregarse al .gitignore para evitar subir la clave a GitHub.

📥 Descargar e instalar el proyecto

Para utilizar el proyecto desde GitHub, primero hay que clonar el repositorio.

Clonar el repositorio
Desde una terminal, ejecutar:

git clone URL_DEL_REPOSITORIO

Reemplazar URL_DEL_REPOSITORIO por la URL del repositorio de GitHub.

Entrar a la carpeta cd nasaapp
Instalar las dependencias
Una vez dentro de la carpeta del proyecto, ejecutar:

npm install

Esto instala todas las dependencias necesarias para que la aplicación pueda funcionar.

-Interfaz
La aplicación tiene un fondo con una imagen relacionada con el espacio y un contenedor oscuro con transparencia.

Dentro del contenedor se muestran:

El título de la imagen.
La imagen obtenida de NASA.
La explicación correspondiente.
Se utiliza ScrollView para poder leer explicaciones que ocupen más espacio que la pantalla.