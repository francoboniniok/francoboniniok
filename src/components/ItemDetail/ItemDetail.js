import Button from '@mui/material/Button'
import React from 'react';
import './ItemDetail.css';

class App extends React.Component{

    state = {
        products: [
            {
                "_id": "1",
                "title": "Carro de Rulemanes",
                "src": ["carro-ruleman.jpg",
                "carro-ruleman2.jpg",
                "carro-ruleman3.jpg",
                "carro-ruleman4.jpg",
                ],
                "description": "Carro con rueda de rulemanes para bote de competición.",
                "content": "",
                "price": 12500,
                "anchos": ["230mm","280mm"],
                "count":1
            }
        ],
        index: 0
    }

    myRef = React.createRef();

    handleTab = index =>{
        this.setState({index: index})
        const images = this.myRef.current.children;
        for(let i=0; i<images.length; i++){
            images[i].className = images[i].className.replace("active", "");
        }
        images[index].className = "active";
    };

    componentDidMount(){
        const {index} = this.state;
        this.myRef.current.children[index].className = "active";

    }

    render(){
        const {products, index} = this.state;
        console.log(products)
        return(
            <div className='ItemDetail'>
                {
                    products.map(item => (
                        <div className='details' key={item._id}>
                            <div className='big-img'>
                            <img src={item.src[index]} alt=""/>
                            </div>

                            <div className='box'>
                                <div className='row'>
                                    <h2>{item.title}</h2>
                                    <span>${item.price}</span>
                                </div>
                                <div className='anchos'>
                                    {
                                        item.anchos.map((ancho, index) => (
                                            <Button style={{background: ancho}} key={index}></Button>
                                        ))
                                    }
                                </div>
                                <p>{item.description}</p>
                                <p>{item.content}</p>

                                <div className='thumb' ref={this.myRef}>
                                    {
                                        item.src.map((img, index) => (
                                            <img src={img} alt='' key={index}
                                            onClick={() => this.handleTab(index)}/>
                                        ))
                                    }
                                </div>
                                <Button variant='contained' className='cart'>Agregar al Carrito</Button>

                            </div>
                        </div>
                    ))
                }
            </div>
        );
    };
}

export default App;