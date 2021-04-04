

// Configuraciones base
const api_key    = '6ef73f560370655db1cdfc6e38aa5b79';
const url_base   = 'https://api.themoviedb.org/3';
const idioma     = 'language=es';
const url_imagen = 'https://image.tmdb.org/t/p/w500/';

// Tendencias semanales
const tendencias_semanal_peliculas = `${url_base}/trending/movie/week?api_key=${api_key}&&${idioma}`;
const tendencias_semanal_series    = `${url_base}/trending/tv/week?api_key=${api_key}&&${idioma}`;
const tendencias_semanal_actores   = `${url_base}/trending/person/week?api_key=${api_key}&&${idioma}`;

// Descubrimiento de nuevo contenido
const descubrir_peliculas = `${url_base}/discover/movie?api_key=${api_key}&&${idioma}`;
const descubrir_series    = `${url_base}/discover/tv?api_key=${api_key}&&${idioma}`;

// Generos/Categorias
const generos_peliculas = `${url_base}/genre/movie/list?api_key=${api_key}&&${idioma}`;
const generos_series    = `${url_base}/genre/tv/list?api_key=${api_key}&&${idioma}`;

// Detalles e información
const detalle_pelicula = `${url_base}/movie/${id_pelicula}?api_key=${api_key}&&${idioma}`;
const detalle_serie    = `${url_base}/tv/${id_serie}?api_key=${api_key}&&${idioma}`;

// Similares
const peliculas_similares = `${url_base}/movie/${id_pelicula}/similar?api_key=${api_key}&&${idioma}`;
const series_similares    = `${url_base}/tv/${id_serie}/similar?api_key=${api_key}&&${idioma}`;

// Video Trailer
const pelicula_trailer = `${url_base}/movie/${id_pelicula}/videos?api_key=${api_key}&&${idioma}`;

// Buscar
const buscarPelicula = `${url_base}/search/movie?api_key=${api_key}&&quer=${busqueda}&&${idioma}`;
const buscarSerie    = `${url_base}/search/movie?api_key=${api_key}&&quer=${busqueda}&&${idioma}`;