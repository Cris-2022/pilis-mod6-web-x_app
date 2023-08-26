import { Link } from "react-router-dom"
import "./Login.css"

export const Login = () =>
    <div className='sign-in-container'>
        <form className='sign-in-form'>
            <span>Ingresar usuario y contraseña</span>
            <input
                className='input-form'
                type="text"
                placeholder='Nombre de usuario'
            />
            <input
                className='input-form'
                type='password'
                placeholder='Contraseña'
            />
            <button className='btn-form'>Iniciar Sesión</button>
        </form>
        <Link to="/">
            <button className="back">Volver al Inicio</button>
        </Link>
    </div>