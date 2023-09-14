import { useState } from 'react';
import Estado from "./Estado";
import './Estados.css';
import json from "../../../assets/estados.json";

const Estados = () => {
  const [estados, setEstados] = useState(json.estados);

  return (
    <div className='tag-container'>
      <h3 className='tag-title'>Filtro por estado</h3>
      {
        estados.map((tag) => (
            <Estado 
              key={tag.id}
              nombre={tag.nombre}
            />
        ))}  

    </div>
  );
};

export default Estados;