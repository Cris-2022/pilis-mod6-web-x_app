import { categorias } from '@/assets/categorias';
import Tag from './Tag';
import './Tags.css';
import { useNavigate } from 'react-router-dom';
import { Row } from 'react-bootstrap';

interface TagsProps {
  setFilteredCategory: (category: string | null) => void
};

const Tags: React.FC<TagsProps> = ({ setFilteredCategory }) => {

  const navigate = useNavigate()
  const addProduct = () => {
    navigate(`/product/add`);
  };

  return (
    <Row>
    <div className='text-black bg-secondary'>      
      <button className="btn btn-success" onClick={addProduct}>Agregar producto</button>

      {categorias.map(category => (
        <Tag
          key={category.id}
          nombre={category.nombre}
          setFilteredCategory={setFilteredCategory}
          category={category.category}
        />
      ))}
    </div>
    </Row>
  );
};

export default Tags;
