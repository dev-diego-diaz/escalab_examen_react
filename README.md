## Examen React JS Escalab

### Resumen del proyecto 
El proyecto consiste en emular una plataforma de streaming similar a **NETFLIX** o **PRIMEVIDEO**, en el cual se consume la api **THE MOVIE DB**.

La cual cuenta con un menu con 3 secciónes principales:

1. **Inicio** (Trailer, Trendings películas, series y actores)
2. **Películas** (Trailer y las 20 peliculas más recientes)
3. **Series** (Trailer y las 20 series más recientes)

Por otro lado se encuentran las secciónes que se gatillan mediante la acción de otro componente

1. **Detalle de película**, a la cual se accede al hacer click sobre una pelicula determinada
2. **Detalle de serie**,a la cual se accede al hacer click sobre una serie determinada
3. **Detalle de actor/actriz**, a la cual se accede al hacer click sobre una un actor o actriz determinado

### Especificaciones técnicas

- El proyecto esta desarrollado con **React JS 17.0.2**

- Para el diseño de UI se utilizo **Material UI**
    - core 4.9.5
    - icons 4.9.1
    - lab 4.0.0-alpha.45

- Para las rutas se utilizo **React Dom 17.0.2**

- Para la reproducción de los trailers se utilizo **react-player 2.9.0**

- Conexión y consumo de apis: Todas las peticiones ajax en el proyecto fueron realizadas con fetch

- Se utilizaron rutas con Lazy Load

- Se implemento página 404

- Para el manejo de estado se utilizo Hooks y Custom Hooks para la visualización de modales en fotos de perfiles, posters de películas y Series

- Se utilizo Prop-Types en los componentes: 
    - **CardContenido** (Prop-Types + defaultProps)
    - **CardPeople**
    - **ContenidoPrincipal**

- El proyecto fue empaquetado para su posterior paso producción con **Webpack y Babel**

- El proyecto en producción fue desplegado en  en **Vercel**

- Fue implementado **ErrorBoundary** en todos los componentes de la aplicación





