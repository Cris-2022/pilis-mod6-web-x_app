import './Producto.css';
import Productos from '../Products/components/Productos';
import Tags from '../Products/components/Tags';
import { useState } from 'react';

export default function Products() {
  const [filteredCategory, setFilteredCategory] = useState<string | null>(null);

  return (
    <div className='container'>
      <div className='d-flex flex-row bg-light mb-2'>
        <Tags setFilteredCategory={setFilteredCategory} />
        <Productos filteredCategory={filteredCategory} />
      </div>
    </div>
  );
}
