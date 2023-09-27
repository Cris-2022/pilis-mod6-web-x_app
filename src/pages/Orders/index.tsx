import { useState } from "react"
import Ordenes from '../Orders/components/Orders';
import './Order.css';
import Estados from './components/Estados';

const Orders = () => {
  const [filteredStatus, setFilteredStatus] = useState<string | null>(null);

  const handleStatus = (status: string | null) => {
    setFilteredStatus(status);
  };

  return (
    <div className='container'>
      <div className='d-flex flex-row bg-light mb-2'> 
      
      <Estados handleStatus={handleStatus} />

      <Ordenes filteredStatus={filteredStatus} />
      </div>
    </div>
  );
};

export default Orders;
