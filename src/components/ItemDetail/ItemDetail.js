import Container from '@mui/material/Container';
import Button from '@mui/material/Button';


const ItemDetail = ({data}) => {
    
    return(
        <Container className='container-general'> 
            <div className='details'>
            <div className='big-img'>
                <img src={`../${data.image}`} alt="" />
            </div>
            <div className='box'>
                <div className='row'>
                <h2>{data.title}</h2>
                <span>$ {data.price}</span>
                </div>
                <div className='anchos'>
                <Button variant='contained'>{data.talles}</Button>
                </div>
                <p>{data.description}</p>
                <p>{data.content}</p>
                <Button variant='contained' className='cart'>Agregar al Carrito</Button>
            </div>
            </div>
        </Container>
    )
}

export default ItemDetail