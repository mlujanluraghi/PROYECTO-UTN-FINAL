import React from 'react';
import '../styles/ContactoPage.css';
import { useState } from 'react';
import axios from 'axios';


const contactoPage = (props) => {

    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    }
    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }
    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm)
        }

    }

    return (
        <main className="holder">
            <div className='titulo'>
                <img src='../../../img/titulopag5.png' width="600px" heigth="100px" alt='titulo' />
            </div>
            <div className='todo'>
                <div className='form'>
                    <h2>Datos de contacto</h2>
                    <form action="/contacto" method="post" className='formulario' onSubmit={handleSubmit}>
                        <p>
                            <label for="nombre">Nombre</label>
                            <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
                        </p>
                        <p>
                            <label for="email">e-mail</label>
                            <input type="text" name="email" value={formData.email} onChange={handleChange} />
                        </p>
                        <p>
                            <label for="celular">Celular</label>
                            <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} />
                        </p>
                        <p>
                            <label for="mensaje">Mensaje</label>
                            <textarea name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
                            {sending ? <p>Enviando...</p> : null}
                            {msg ? <p>{msg}</p> : null}
                        </p>
                        <p className='centrar'> <input type="submit" value="Enviar" />
                        </p>
                    </form>
                </div>

                <div class="datos">
                    <h2>Redes Sociales</h2>
                    <img src='../../../img/wapp.jpg' width="50px" heigt="50px" alt="wapp" />
                    <ul>54 11 62503970</ul>
                    <img src='../../../img/face.png' width="50px" heigt="50px" alt="face" />
                    <ul>https://www.facebook.com/marialujan.luraghi</ul>
                    <img src='../../../img/inst.jpg' width="50px" heigt="50px" alt="inst" />
                    <ul>https://www.instagram.com/malulu15/</ul>
                    <img src='../../../img/tiktok.png' width="50px" heigt="50px" alt="tik" />
                    <ul>https://www.tiktok.com/@malulu020573</ul>
                    <p>Responderé a la brevedad</p>
                </div>
            </div>
        </main>

    );
}
export default contactoPage;