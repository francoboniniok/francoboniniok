import React,{useState} from 'react'
import Button from '@mui/material/Button'

const ItemCount = () => {
    const [count, setCount] = useState(1)
    const [stock, setStock] = useState(5)

    const onAdd = () => {
        if(count < stock){
            setCount(count + 1)
        }
        
    }
    return(
        <div>        
        <p>{count}</p>
        <Button variant='contained' onClick={onAdd}>+</Button>

        </div>
    )

}

export default ItemCount