import Button from '@mui/material/Button';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';


function NavBar(props) {
    return(
        <header className='main-header'>
          <div className='container-logo'>          
          <img src='logo-bonini.jpg' className='img-header'></img>
          </div>
  
          <ul className='navbar'>
            <li><Link to={'/'}><Button variant="contained">Home</Button></Link></li>
            <li><Link to={'/category/'}><Button variant="contained">Productos</Button></Link></li>        
            <li><Button variant="contained">Nosotros</Button></li>
            <li><Button variant="contained">Contacto</Button></li>
          </ul>

          <CartWidget/>

          
        </header>
    )
}

export default NavBar;