import "./Producto.css"
import Productos from "../Products/components/Productos"
import Tags from '../Products/components/Tags'

export default function Products() {
  /* const isLogin = false;
 */
  return (
    <div className='main-container'>   
        <Tags/>  
        <Productos />        
    </div>
      
  )
     
  
}
