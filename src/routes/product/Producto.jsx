import "./Producto.css"
import Productos from "../../components/Producto/Productos"
import Tags from '../../components/Tag/Tags';

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