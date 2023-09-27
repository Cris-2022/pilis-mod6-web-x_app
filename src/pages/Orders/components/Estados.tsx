import {estados} from '../../../assets/estados';
import Estado from './Estado';
import './Estados.css';
import { Row } from 'react-bootstrap';

interface EstadosProps {
  handleStatus: (status: string | null) => void;
};

const Estados: React.FC<EstadosProps> = ({ handleStatus }) => {

  return (
    <div className=''>
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
