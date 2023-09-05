import { Link, Outlet } from "react-router-dom";
import "./Navigation.css"

export const Navigation = () => {
    return (
        <>
        <header>
            <Link to="/">
                <img src="../logo.png" className='logo' />
            </Link>
            <h1>xApp</h1>
            <Link to="/Login" className='login'>
                <img src="../login.png" alt="" />
                <h3 className='text-login'>Iniciar Sesión</h3>
            </Link>
        </header>
        <Outlet/>
        </>
    );
};