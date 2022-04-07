import './Card.css'
import React,{ useState} from 'react'
import Button from '@mui/material/Button'
import { Link, Navigate, useNavigate } from 'react-router-dom';



export default function Card({ data }) {

    const navigate = useNavigate();
    const { title, price, talles, image, medida, id } = data

    const changePage = () => {
        navigate ('/productos/${id}')
    }

    return(
        <div className="card-item" onClick={changePage}>
            <img src={image} alt='image'/>

            <div className='container-card-data'>
            <h2>{title}</h2>
            <Button><p>Medida : {talles}</p></Button>
            <p>Precio : $ {price}</p>
            <Button variant='contained'>Ver Detalles</Button>
            </div>
           
        </div>
    )
}