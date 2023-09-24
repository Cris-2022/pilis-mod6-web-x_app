import {estados} from '../../../assets/estados';
import Estado from './Estado';
import './Estados.css';
import { Row } from 'react-bootstrap';

interface EstadosProps {
  handleStatus: (status: string | null) => void;
};

const Estados: React.FC<EstadosProps> = ({ handleStatus }) => {

  return (
    <Row>
    <div className='text-black bg-secondary tag'>
      <h5 className='panel-title'>Estados</h5>


      {estados.map(tag => (
        <Estado
          key={tag.id}
          nombre={tag.nombre}
          status={tag.status}
          handleStatus={handleStatus}
        />
      ))}
    </div>
    </Row>

  );
};

export default Estados;
