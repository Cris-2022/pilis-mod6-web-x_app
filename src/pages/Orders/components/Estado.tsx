import './Estado.css';


interface EstadoProps {
  handleStatus: (status: string | null) => void;
  nombre: string
  status: string
};

const Estado: React.FC<EstadoProps> = ({ nombre, handleStatus, status }) => {
  return <button
    className='tag'
    onClick={() => handleStatus(status)}>
    {nombre}
  </button>;
};

export default Estado;
