# Mercado Libre - Front-end Challenge

En este repositorio se comparte la resolución del challenge para puesto front-end en Mercado Libre.

## Sobre el proyecto

Joaquín Santos
Versión: 1.0.0
Fecha 10/03/2021

## Tecnologías

La aplicación fue realizada con el stack Nuxt js, sirviendo Next y Express para las funcionalidades back-end y Vue.js para el front-end.

### Front-end

- El front-end fue realizado con Vue.js y esta dividido entre componentes en la carpeta /components, y páginas en la carpeta /pages.
- Para la aplicación de estilos se utilizó SCSS.
- Se utilizó Server Side Rendering para mejorar la performance.

### Back-end

- Las APIs del server endpoint fueron realizadas con Node y Express, ubicandose fisicamente en la carpeta /api.
- Se dividió luego en dos useCases, uno para obtener el listado de productos a la API search y el otro para obtener el producto, descripción y categorías solicitadas.
- Las rutas habilitadas por la API se encuentran en la carpeta /routes.

### Pre requisitos

Node v12.

## Empezando

Primero descargue o clone el proyecto en su computadora y luego siga las instrucciones.

Para instalar abra la consola o terminal y diríjase a donde descargó el proyecto. Luego ejecute el comando

```
npm install
```

Para ejecutar el sistema en ambiente de producción ejecute

```
npm run build
npm run start
```

Si desea hacerlo en ambiente de desarrollo

```
npm run dev
```
