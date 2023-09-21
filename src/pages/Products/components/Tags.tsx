import { categorias } from '@/assets/categorias';
import Tag from './Tag';
import './Tags.css';
import { useNavigate } from 'react-router-dom';

interface TagsProps {
  setFilteredCategory: (category: string | null) => void
};

const Tags: React.FC<TagsProps> = ({ setFilteredCategory }) => {

  const navigate = useNavigate()
  const addProduct = () => {
    navigate(`/product/add`);
  };

  return (
    <div className='tag-container'>
      <h3 className='tag-title'>Tags/filtros</h3>
      <button onClick={addProduct}>Agregar productos</button>
      {categorias.map(category => (
        <Tag
          key={category.id}
          nombre={category.nombre}
          setFilteredCategory={setFilteredCategory}
          category={category.category}
        />
      ))}
    </div>
  );
};

export default Tags;
