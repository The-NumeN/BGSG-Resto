import './index.css';
import { Custom } from './Custom';
import { Simple } from './Simple';

const Card = ({ children}) => {
  
  return(
    <div>
      {children}
    </div>
  )
};

Card.Custom = Custom;
Card.Simple = Simple;

export default Card;