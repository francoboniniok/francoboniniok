import Button from '@mui/material/Button';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget'


function NavBar() {
    return(
        <header className='main-header'>
          <div className='container-logo'>          
          <img src='logo-bonini.jpg' className='img-header'></img>
          </div>
  
          <ul className='navbar'>
            <li><Button variant="contained">Home</Button></li>
            <li><Button variant="contained">Productos</Button></li>        
            <li><Button variant="contained">Nosotros</Button></li>
            <li><Button variant="contained">Contacto</Button></li>
          </ul>

          <CartWidget/>

          
        </header>
    )
}

export default NavBar;