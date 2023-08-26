import "./Producto.css"
import Productos from "../../components/Producto/Productos"
import Tags from '../../components/Tag/Tags';
import Menu from "../../components/Navbar/Navbar"

const Product = () => {

    return (

    <div className='main-container'>  
        <Tags>
            
        </Tags>   
        <Productos />
        
    </div>

    )
}

export default Product