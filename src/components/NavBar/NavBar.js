import { useState, useContext, useEffect } from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { collection, getDocs } from 'firebase/firestore'
import db from '../../firebase'


function NavBar(props) {
    const [anchorEl, setAnchorEl] = useState(null);
    const [routes, setRoutes] = useState([])
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    useEffect( () => {
        getRoutes()
    }, [])

    const getRoutes = async() => {
        const routesCollection = collection(db, 'rutas')
        const routesSnapshot = await getDocs(routesCollection)
        const routesList = routesSnapshot.docs.map( (doc) => {
            return doc.data()
        })
        setRoutes(routesList)
    }



    return(
        //JSX
        //
        <header className={`main-header`}> 
            <div className='container-logo'>
                    <img src="../logo-bonini.jpg" className="img-header"/>
            </div>
            <ul className='navbar'> 
                {routes.map((page) => {
                    return(
                        page.title === 'Productos' ? (
                        <li>
                            <Button variant='contained' aria-controls={open ? 'basic-menu' : undefined}  aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick}>{page.title}</Button>
                            <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose} MenuListProps={{'aria-labelledby': 'basic-button',}}>
                                <MenuItem onClick={handleClose}>
                                    <Link to={'/carros'}>Carros</Link>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <Link to={'/horquillas'}>Horquillas</Link>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <Link to={'/zapatillas'}>Zapatillas</Link>
                                </MenuItem>
                            </Menu> 
                        </li>
                        ) : (
                        <li>
                            <Button variant="contained">
                                <Link className='botones' to={page.url}>{page.title}</Link>
                            </Button>
                        </li>
                        )
                        
                    )
                })}
            </ul>
            <CartWidget />
        </header>
    )
}

export default NavBar