import { Ajout } from "./Ajout";
import { Annuler } from "./Annuler";

const Button = ({children,action}) => {

    return(
        <div onclick={action}>
            {children}
        </div>
    )
};

Button.Ajout = Ajout;
Button.Autre = Annuler;

export default Button;