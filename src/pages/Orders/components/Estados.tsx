import {estados} from '../../../assets/estados';
import Estado from './Estado';
import './Estados.css';

interface EstadosProps {
  handleStatus: (status: string | null) => void;
};

const Estados: React.FC<EstadosProps> = ({ handleStatus }) => {

  return (
    <div className='tag-container'>
      <h3 className='tag-title'>Filtro por estado</h3>

      {estados.map(tag => (
        <Estado
          key={tag.id}
          nombre={tag.nombre}
          status={tag.status}
          handleStatus={handleStatus}
        />
      ))}
    </div>
  );
};

export default Estados;
