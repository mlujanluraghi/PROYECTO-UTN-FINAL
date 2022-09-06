import React, { useEffect, useState } from "react";
import axios from 'axios';
import NovedadItem from '../components/novedades/NovedadItem';

const NovedadesPage = (props) => {
    const [loading, setLoading] = useState(false);
    const [novedades, setNovedades] = useState([]);

    useEffect(() => {
        const cargarNovedades = async () => {
            setLoading(true);
            const response = await axios.get('http://locahost:3000/api/novedades');
            setNovedades(response.data);
            setLoading(false);
        };
        cargarNovedades();
    }, []);
    return (
        <section className="holder">
            <div className="titulo2"><img src='../../../img/titulo4.png' width="400px" heigth="70px" alt='titulo' /></div>
            {loading ? (
                <p> Cargando...</p>
            ) : (
                novedades.map(item => <NovedadItem
                    key={item.id}
                    title={item.titulo}
                    subtitle={item.subtitulo}
                    body={item.cuerpo} />)
            )}
        </section>
    );
}
export default NovedadesPage;


