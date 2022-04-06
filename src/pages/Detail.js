import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import mockProductos from '../Utils/productsMock'
import '../components/ItemDetail/ItemDetail.css';


const DetailPage = () => {
    const { id, category } = useParams()
    const [product, setProduct] = useState({})

    useEffect( () => {
        filterProductById(mockProductos, id)
    }, [id])

    const filterProductById = (array , id) => {
        return array.map( (product) => {
            if(product.id == id) {
                return setProduct(product)
            }
        })
    }

    
    return(
        <Container className='container-general'> 
            <div className='details'>
            <div className='big-img'>
                <img src={`../${product.image}`} alt="" />
            </div>
            <div className='box'>
                <div className='row'>
                <h2>{product.title}</h2>
                <span>$ {product.price}</span>
                </div>
                <div className='anchos'>
                <Button variant='contained'>{product.talles}</Button>
                </div>
                <p>{product.description}</p>
                <p>{product.content}</p>
                <Button variant='contained' className='cart'>Agregar al Carrito</Button>
            </div>
            </div>
        </Container>
    )
}

export default DetailPage