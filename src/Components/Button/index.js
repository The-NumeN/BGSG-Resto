import { Ajout } from "./Ajout";
import { Annuler } from "./Annuler";

const Button = ({children, onClick}) => {

    return(
        <div onClick={onClick}>
            {children}
        </div>
    )
};

Button.Ajout = Ajout;
Button.Annuler = Annuler;

export default Button;