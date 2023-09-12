import React from 'react';
import './Tag.css'

const Tag = ({ nombre }) => {
  return (
    <span className="tag">{nombre}</span>
  )
}

export default Tag;