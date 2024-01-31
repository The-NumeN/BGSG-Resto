import { Simcard } from "./Simcard";
import { Comcard } from "./Comcard";
const Card = ({children}) =>{
    return(
    <div>
        {children}
    </div>
    )
}
Card.Simcard = Simcard;
Card.Comcard = Comcard;

export default Card;