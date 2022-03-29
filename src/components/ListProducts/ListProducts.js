import React,{useState, useEffect} from 'react'
import Card from '../Card/Card'

const ListProducts = ({children}) => {
    
    const mockProductos = [{
        id: 1,
        title : 'Carro de Rulemanes',
        medida : '230mm',
        price : 12500,
        image : 'carro-ruleman.jpg',
        stock : 5
    },

    {
        id: 2,
        title : 'Zapatillas Para Botes',
        medida : '45',
        price : 10000,
        image : 'zapatillas-bote.jpg',
        stock : 5
    },
    
    {
        id: 3,
        title : 'Horquilla Competicion',
        medida : 'Remo Corto',
        price : 4000,
        image : 'horquilla-remo-corto.jpg',
        stock : 7
    }]

    const [products, setProducts] = useState([
    ])

    const getProducts = () =>{
        return new Promise((resolve, reject) => {
            return resolve (mockProductos)
        })
    }

    useEffect ( () => {
        getProducts().then((data) => {
            setProducts(data)
        })
    }, [])
    
    return(
        <div className='container-cards'>
            <h1>Productos Destacados</h1>
            <br></br>
            {products.map( (product) => {
                const {id} = product

                return(
                    <Card data={product} key={id} />
                )
            } )}
        </div>
    )
}

export default ListProducts;

