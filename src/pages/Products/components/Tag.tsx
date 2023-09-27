import './Tag.css';

interface Props {
  nombre: string;
  setFilteredCategory: (category: string | null) => void;
  category: string;
}
const Tag = ({ nombre, setFilteredCategory, category }: Props) => {
  return (
    <span className='tag' onClick={() => setFilteredCategory(category)}>
      {nombre}
    </span>
  );
};

export default Tag;
