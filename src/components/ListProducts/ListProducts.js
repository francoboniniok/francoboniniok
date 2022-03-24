import React,{useState} from 'react'
import Card from '../Card/Card'

const ListProducts = ({children}) => {
    
    const [showCard, setShowCard] = useState(true)

    let dataProduct = {
        title : 'Carro de Rulemanes',
        ancho : '230mm',
        price : 12500,
        stock : 5
    }

    return(
        <div className='container-cards'>
            <h2> {children} </h2>
            <Card data={dataProduct}/>
        </div>
    )
}

export default ListProducts;

