import React from 'react';
import '../styles/ScrapPage.css';

const ScrapPage = (props) => {
    return (
        <main className='holder'>

            <div className='tit'><img src="../../../img/titulopag(2).png" width="600px" height="100px" alt="titulo" /></div>

            <div className='grid-container'>
                <div>
                    <h3>Vintage</h3>
                    <img src="../../../img/vintage.jpg" alt="Vintage" />
                    <p>
                        Un estilo que nos lleva al siglo XIX con fotos e imágenes de época. Jugamos con tonos amarillos,
                        marrones, caquis, sepias y se envejecen los elementos tanto como sea posible. Las tintas Distress
                        Oxide mandan aquí. Los elementos son flores, partituras y objetos de época.</p>
                </div>

                <div>
                    <h3>Vintage Moderno</h3>
                    <img src="../../../img/modernovintage.jpg" alt="Moderno Vintage" />
                    <p> Una variación del estilo Vintage, pero en lugar de jugar con el sepia y los tonos más oscuros,
                        cambia a colores más brillantes como el fucsia, el azul o el naranja. Pero respeta las técnicas de
                        el verde, el blanco y los patrones florales, delicada naturaleza, con encajes, flores, perlas o
                        plumas.</p>
                </div>

                <div>
                    <h3> Simple-Minimalista</h3>
                    <img src="../../../img/clean.jpg" alt="Simple y limpio" />
                    <p> Elegante y simple, no hay nada mejor. Un estilo que se caracteriza por espacios limpios, con colores
                        lisos y brillantes y formas muy proporcionadas decoradas de forma muy sobria y equilibrada.</p>
                </div>

                <div>
                    <h3>Moderno</h3>
                    <img src="../../../img/moderno.jpg" alt="Moderno" />
                    <p> Con una apariencia similar a Clean and Simple, se usan con colores brillantes y añadimos un poco más
                        de decoración. Las composiciones son más cargadas y presentan una sola foto rodeada de un título y
                        elementos que acompañan a esta foto a la par que la decoran.</p>
                </div>

                <div>
                    <h3>Retro</h3>
                    <img src="../../../img/retro.jpg" alt="Retro" />
                    <p> Este estilo se remonta a los años 50, 60 y 70. La geometría reina con colores brillantes que no
                        necesariamente respetan la paleta de colores. Las imágenes reflejan los anuncios y las imágenes de
                        moda de la época, así como los nuevos elementos como la llegada de los electrodomésticos...</p>
                </div>

                <div>
                    <h3>Steam Punk</h3>
                    <img src="../../../img/pumk.jpg" alt="Pumk" />
                    <p> Estilo retrofuturista que representa una visión utópica del futuro vista desde el pasado. Esto se
                        convierte en una oportunidad para hacer mucho DIY y mezclar las tecnologías emergentes con una
                        estética victoriana con una cierta ideología romántica que enfrenta a la máquina con la naturaleza.
                    </p>
                </div>

                <div>
                    <h3>Libre</h3>
                    <img src="../../../img/free.jpg" alt="Estilo Libre" />
                    <p> Estilo libre. Allí, todo vale, la creatividad y la imaginación no tienen límites.
                        Generalmente son proyectos muy coloridos, brillantes y alegres y buscan la originalidad a través de
                        decoraciones hechas a mano.</p>
                </div>

                <div>
                    <h3>Ephemera</h3>
                    <img src="../../../img/ephederma.jpg" alt="Ephemera" />
                    <p> El estilo efímero o de corta duración es bastante casual. Mezcla texturas entre varias colecciones
                        sin necesidad de hilo conductor. Su usa mucho pegamento ya que colocas bastantes decoraciones para
                        jugar con el volumen y dar cierto equilibrio al aspecto deordenado del proyecto.</p>
                </div>

                <div>
                    <h3>Americano</h3>
                    <img src="../../../img/americano.jpg" alt="Americano" />
                    <p> Lindo o mono en inglés, eso lo dice todo. Aquí los bebés son los reyes con los tradicionales tonos
                        azul y rosa y los motivos delicados pero coloridos. Con ilustraciones simples pero alegres y muchos
                        elementos tiernos de animales de peluche, globos y otros animales.</p>
                </div>

                <div>
                    <h3>Digital</h3>
                    <img src="../../../img/digital.jpg" alt="Digital" />
                    <p> Dejamos el mundo analógico para pasar a softwares como photoshop, el gimp, etc.. Aquí se aceptan
                        todos los estilos mencionados, sólo tomará un poco de tiempo editarlos. La variante de Hybrid scrap
                        mezcla las dos formas de decoración para añadir más elementos tridimensionales.</p>
                </div>

                <div>
                    <h3>Natural</h3>
                    <img src="../../../img/natural.jpg" alt="Natural" />
                    <p> El proyecto se inspira en la naturaleza. Los elementos rústicos decorativos están todos directamente
                        relacionados con las flores, hojas, plantas, árboles y el lado rústico que sobrevive con al paso del
                        tiempo, lo cual es perfecto para un álbum de recortes.</p>
                </div>

                <div>
                    <h3>Mixed Media</h3>
                    <img src="../../../img/mix.jpg" alt="Mix Media" />
                    <p> Juega con los colores pero sobre todo con las texturas y no hay miedo de exagerar! El estilo es
                        libre, sin demasiadas restricciones, todo vale: el papel de periódico, el envoltorio de plástico, la
                        pintura acrílica, los sellos... Añade botones, cintas, tarjetas sobre otras tarjetas...</p>
                </div>
            </div>

        </main>
    );
}
export default ScrapPage;