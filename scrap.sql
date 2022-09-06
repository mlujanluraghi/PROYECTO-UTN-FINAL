-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 05-09-2022 a las 20:19:16
-- Versión del servidor: 5.7.36
-- Versión de PHP: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `scrap`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `contacto`
--

DROP TABLE IF EXISTS `contacto`;
CREATE TABLE IF NOT EXISTS `contacto` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(250) NOT NULL,
  `subtitulo` text NOT NULL,
  `cuerpo` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=26 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `contacto`
--

INSERT INTO `contacto` (`id`, `titulo`, `subtitulo`, `cuerpo`) VALUES
(10, 'Origami 2', 'Paciencia, tranquilidad, quietud y sabiduría', 'El origami o papiroflexia es un arte que consiste en el plegado de papel sin usar tijeras ni pegamento para obtener figuras de formas variadas, muchas de las cuales podrían considerarse como esculturas de papel\"\"\"'),
(11, 'Ya esta llegando...', 'Nuevas técnicas en cartonaje', 'Trabajar haciendo papeles de papeles y estamparlos a gusto, es una gran solucion a tus proyectos\" Podes sumarte y ser parte de este aprendizaje'),
(3, '¿Quienes pueden realizar cartonaje?', 'Materiales necesarios', 'Pueden realizar cartonaje adultos que trabajen de manera responsable con objetos cortantes y herramientas de temperatura alta, ya que trabajamos con utensilios de cierto riesgo.\r\nPara que los niños puedan trabajar el cartonaje, deben de ser proyectos específicos para ellos.\r\nAsí pues, pueden realizarlo todos aquellos que quieran desarrollar su creatividad de una manera original.\r\n\"\"\"\"'),
(4, '¿Cómo se hace?', '¿Que tipo de técnicas se utilizan?\r\n', 'Se pueden utilizar muchísimas técnicas, como pintura, caligrafía, mix media, encuadernación, en las que se incluye, el recorte, pegado, rasgado, troquelado, estampación, texturización, repujado, colocación de remaches y ojales, costura, confección de etiquetas, estarcido y decapeage.\"\"'),
(5, 'Todo lo necesario aquiiiii', '¿Qué herramientas se utilizan?\r\n', 'Las más comunes son tijeras de formas, cúter, pistola de silicona caliente, plegaderas, pegamento sin ácido, guillotina, troqueladoras, cartulinas, carpetas de embossing, cintas, pegatinas, tintas, sellos, rotuladores, cartón, botones, lápices, whasi tape, etc, etc….\r\nEstos son los aspectos y beneficios más importantes que se adquieren cuando realizamos cartonaje.\r\n\"'),
(25, 'Super Profe', 'Siempre esta la super profe...', 'Gran persona que siempre me acompañó en este proceso! Mil gracias!'),
(24, 'No puedo seguir.... noooooo!', 'Perdi Todoooooooooo!!!!!!!!!!', 'Que puedo hacer para que se vean en la pagina de novedades????????\"\r\nNo se como hacerlo!!!!!!');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

DROP TABLE IF EXISTS `novedades`;
CREATE TABLE IF NOT EXISTS `novedades` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(250) DEFAULT NULL,
  `subtitulo` varchar(250) DEFAULT NULL,
  `cuerpo` text,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `subtitulo`, `cuerpo`) VALUES
(1, 'Haciendo Scrap', 'Link https://www.youtube.com/watch?v=YiKvDWMLc6Q', 'Los materiales fundamentales que necesitas para hacer scrap son: un plano de corte; herramientas para cortar (cutter, tijeras y regla); una guillotina de papel; pegamentos; tintas; papeles de scrapbooking lisos; papeles de scrapbooking con motivos impresos; sellos; una perforadora y remachadora; y por último, adornos'),
(2, 'Materiales Scrap Agosto', 'Link https://www.youtube.com/watch?v=YiKvDWMLc6Q', 'Los materiales fundamentales que necesitas para hacer scrap son: un plano de corte; herramientas para cortar (cutter, tijeras y regla); una guillotina de papel; pegamentos; tintas; papeles de scrapbooking lisos; papeles de scrapbooking con motivos impresos; sellos; una perforadora y remachadora; y por último, adornos\"'),
(4, 'Lo nuevo del mes', 'Link https://www.youtube.com/watch?v=3aSxlsqSIks', '¡Entérate de todas las novedades de scrapbooking en esta sección!\r\n\r\nSi estás esperando con ansia lo último de We R Memory Keepers, la nueva colección de Lora Bailora, los planners de The Happy Planner, los nuevos productos Craftelier Basics… ¡Aquí lo tienes todo a un solo clic!\r\n\r\nEstamos siempre pendientes de todas las primicias y seguimos tendencias para que tengas lo más nuevo en tu hogar en un abrir y cerrar de ojos. Las herramientas más originales, las marcas de moda y los productos más novedosos a tu alcance en nuestra tienda online.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(4, 'maria', '81dc9bdb52d04dc20036dbd8313ed055'),
(5, 'maria', '1234'),
(6, 'flavia', '81dc9bdb52d04dc20036dbd8313ed055'),
(7, 'flavia', '1234');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
