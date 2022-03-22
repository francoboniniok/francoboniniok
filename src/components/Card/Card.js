import './Card.css'
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Card() {
    return(
        <div className="card-item">
            <h2>Titulo</h2>
            <p>Precio : $ 100</p>
            <p>Precio : $ 100</p>
            <Button variant='contained'> Comprar</Button>
        </div>
    )
}