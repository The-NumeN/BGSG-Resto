import './index.css';
import { Cuscard } from './Cuscard';
import { Simcard } from './Simcard';

const Card = ({ children}) => {
  
  return(
    <div>
      {children}
    </div>
  )
};

Card.Cuscard = Cuscard;
Card.Simcard = Simcard;

export default Card;