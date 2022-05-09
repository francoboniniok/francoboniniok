import './Contact.css'
import { useState } from 'react'
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { FaInstagram } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa"

const ContactPage = () => {

    const [value, setValue] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Envio de nombre: ", value)
    }

    const handleChange = (e) => {
        console.log(e)
        setValue(e.target.value)
    }

    const resetForm = () => {
        setValue('')
        console.log("limpiar formulario")
    }

    return(
            <form class="form">
                <h2 className='titulo'>CONTACTO</h2>
                <p type="Nombre:"><input placeholder="Escribe tu nombre aquí"></input></p>
                <p type="Email:"><input placeholder="Dejanos un Email de contacto.."></input></p>
                <p type="Message:"><input placeholder="Cuentanos sobre que podemos ayudarte.."></input></p>
                <button>Enviar Mensaje</button>
            </form>
)
}

export default ContactPage