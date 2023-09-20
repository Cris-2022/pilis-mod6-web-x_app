import json from '@/assets/tags.json';
import Tag from './Tag';
import './Tags.css';
import { useNavigate } from 'react-router-dom';




const Tags = () => {

  const navigate = useNavigate()
  const addProduct = () => {
    navigate(`/product/add`)
  };

  const { tags } = json;
  return (
    <div className='tag-container'>
      <h3 className='tag-title'>Tags/filtros</h3>
      <button onClick={addProduct}>Agregar productos</button>
      {tags.map(tag => (
        <Tag key={tag.id} nombre={tag.nombre} />
      ))}
    </div>
  );
};

export default Tags;
