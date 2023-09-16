import json from '@/assets/tags.json';
import Tag from './Tag';
import './Tags.css';

const Tags = () => {
  const { tags } = json;
  return (
    <div className='tag-container'>
      <h3 className='tag-title'>Tags/filtros</h3>
      {tags.map(tag => (
        <Tag key={tag.id} nombre={tag.nombre} />
      ))}
    </div>
  );
};

export default Tags;
