// import React, { useEffect, useState } from 'react'

// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from '../components/GifGridItem'
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([]);
    const { data: images, loading } = useFetchGifs(category);

    return (
        <div className="cards">
            <h3 className="contenido_principal animate__animated animate__fadeIn">{category}</h3>
            {loading && <p className=" animate__animated animate__flash">Loading</p>}
            <div className="card-grid">
                {images.map((img) => {
                    return <GifGridItem key={img.id} {...img} />
                })}

            </div>

        </div>
    )
}
