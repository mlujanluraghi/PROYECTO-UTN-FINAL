import React from 'react';


const NovedadItem = (props) => {
    const { id, title, subtitle, body } = props;

    return (
        <div className='novedades'>
            <h3>{id}</h3>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <div dangerouslySetInnerHTML={
                { __html: body }} />

        </div>
    )
}




export default NovedadItem;