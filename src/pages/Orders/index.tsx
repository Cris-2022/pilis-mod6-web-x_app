import "./Order.css"
import Ordenes from "../Orders/components/Orders"
import Estados from "./components/Estados"

const Orders = () => {

    return (

    <div className='main-container'>
        <Estados/>
        <Ordenes/>        
    </div>

    )
}

export default Orders