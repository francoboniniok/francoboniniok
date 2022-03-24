import React,{useState, useEffect } from 'react';
import './App.css';

import NavBar from  './components/NavBar/NavBar';
import ListProducts from './components/ListProducts/ListProducts';
import Card from './components/Card/Card';
import Container from '@mui/material/Container';


function App() {
  const  [open,setOpen] = useState(false);
  
  const handleClose = (value) => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true)
  }

  useEffect( () => {
    console.log('Log useEffect')
  })

  return (
    <div className='App'>
      <NavBar/>

      <Container className='container-general'>
        
      <ListProducts>
      <h2>Productos Destacados</h2>
      </ListProducts>
      
      </Container>
      

    </div>
  );
}

export default App;
