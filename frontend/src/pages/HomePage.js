import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/HomePage.css';

const HomePage = (props) => {
    return (
        <main>
            <div className='titulo'><img src='../../../img/titulopag1.png' width="800px" height="120px" alt='titulo' />
            </div>

            <div className='cuerpo'>

                <img src="../../../img/principal.png" width="800px" height="500px" alt="Scrapbook" />


            </div>

            <div className="parrafoinicial">

                <p>
                    Es un método a través del cual se plasman recuerdos, emociones o acontecimientos importantes. Se
                    utilizan fotografías y se decoran con ayuda de papeles estampados, cintas, cartulinas, washi tape,
                    sellos y todo tipo de adornos. La traducción literal del término "Scrapbook" significa "libro de
                    recortes", aunque también puede tomar la forma de un álbum, una tarjeta o una lámina.</p>
                <p>
                    El scrapbooking nos ayuda a preservar nuestros recuerdos de una forma física y artística. En muchos
                    casos incluye técnicas de acuarela, caligrafía, costura, dibujo, papiroflexia, estampación, etc.
                    El pilar fundamental del scrap es contar una historia y para ello se basa en dos elementos claves:
                    la fotografía y el recuerdo alrededor de ella.</p>
                <p>
                    Esta actividad creativa se realiza en muchas ocasiones de forma indirecta y sin premeditación.
                    Hacemos scrap al decorar una agenda o guardando en una libreta mapas, anotaciones y tickets de un
                    viaje...
                    Piénsalo un segundo.
                    Son solo algunos ejemplos de los formas que puede tomar el scrapbooking...
                </p>
            </div>


        </main >
    );
}
export default HomePage;