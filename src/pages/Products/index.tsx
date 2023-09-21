import "./Producto.css"
import Productos from "../Products/components/Productos"
import Tags from '../Products/components/Tags'
import { useState } from "react"

export default function Products() {

  const [filteredCategory, setFilteredCategory] = useState<string | null>(null);

  return (
    <div className='main-container'>
      <Tags setFilteredCategory={setFilteredCategory}/>
      <Productos filteredCategory={filteredCategory} />
    </div>
  );
};
