import React,{useState, useEffect } from 'react';
import './App.css';

//components
import NavBar from  './components/NavBar/NavBar';
import ListProducts from './components/ListProducts/ListProducts';
import Card from './components/Card/Card';
import Container from '@mui/material/Container';
import ItemDetail from './components/ItemDetail/ItemDetail';


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
        <ItemDetail/>
      <Container className='container-general'>
        <ListProducts/>
      </Container>
      
    </div>
  );
}

export default App;
