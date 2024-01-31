import { Ajout } from "./Ajout";
import { Autre } from "./Autre";

const Button = ({children,action}) => {

    return(
        <div onclick={action}>
            {children}
        </div>
    )
};

Button.Ajout = Ajout;
Button.Autre = Autre;

export default Button;