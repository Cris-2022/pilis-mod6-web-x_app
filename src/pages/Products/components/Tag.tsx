import './Tag.css';

interface Props {
  nombre: string;
}
const Tag = ({ nombre }: Props) => {
  return <span className='tag'>{nombre}</span>;
};

export default Tag;
