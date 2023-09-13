import React, { useState } from 'react';
import Tag from "./Tag";
import './Tags.css';
import json from "../../../assets/tags.json";

const Tags = () => {
  const [tags, setTags] = useState(json.tags);

  return (
    <div className='tag-container'>
      <h3 className='tag-title'>Tags/filtros</h3>
      {
        tags.map((tag) => (
            <Tag 
              key={tag.id}
              nombre={tag.nombre}
            />
        ))}  

    </div>
  );
};

export default Tags;