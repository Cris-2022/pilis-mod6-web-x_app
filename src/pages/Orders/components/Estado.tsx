import './Estado.css';


interface EstadoProps {
  handleStatus: (status: string | null) => void;
  nombre: string
  status: string
};

const Estado: React.FC<EstadoProps> = ({ nombre, handleStatus, status }) => {
  return <span
    className='tag'
    onClick={() => handleStatus(status)}>
    {nombre}
  </span>;
};

export default Estado;
