import { estados } from '../../../assets/estados';
import Estado from './Estado';
import './Estados.css';

interface EstadosProps {
  handleStatus: (status: string | null) => void;
}

const Estados: React.FC<EstadosProps> = ({ handleStatus }) => {
  return (
    <div>
      <div className='set-menu text-black max-vh-100 d-flex flex-column'>
        {estados.map(tag => (
          <Estado
            key={tag.id}
            nombre={tag.nombre}
            status={tag.status}
            handleStatus={handleStatus}
          />
        ))}
      </div>
    </div>
  );
};

export default Estados;
