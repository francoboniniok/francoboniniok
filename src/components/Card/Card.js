import './Card.css'
import React,{ useState, useEffect } from 'react'
import ItemCount from '../ItemCount/ItemCount'

export default function Card({ data }) {
    const { title, price, ancho } = data
    const [count, setCount ] = useState(1)

    const addStock = () => {
        setCount (count + 1)
    }

    return(
        <div className="card-item">
            <img src='carro-ruleman.png' alt='carro-ruleman'/>

            <div className='container-card-data'>
            <h2>{title}</h2>
            <p>Ancho : {ancho}</p>
            <p>Precio : $ {price}</p>
            <ItemCount/>
            </div>
           
        </div>
    )
}