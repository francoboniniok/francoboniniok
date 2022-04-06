import './Card.css'
import React,{ useState} from 'react'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom';



export default function Card({ data }) {
    const { title, price, ancho, image, medida } = data
    const [count, setCount ] = useState(1)

    const addStock = () => {
        setCount (count + 1)
    }

    return(
        <div className="card-item">
            <img src={image} alt='image'/>

            <div className='container-card-data'>
            <h2>{title}</h2>
            <p>Medida : {medida}</p>
            <p>Precio : $ {price}</p>
            <Link to={'/:category/:id'}><Button variant='contained'>Ver Detalles</Button></Link>
            </div>
           
        </div>
    )
}