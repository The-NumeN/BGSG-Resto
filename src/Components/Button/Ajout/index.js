import './index.css';
export const Ajout = ({label, onClick}) => {
    return (
        <button  onClick={onClick}>
            <p>{label}</p>
        </button>
    )
}