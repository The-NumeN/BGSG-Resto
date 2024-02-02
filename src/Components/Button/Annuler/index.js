import './index.css'
export const Annuler = ({label, onClick}) => {
    return (
        <button onClick={onClick}>
            <p>{label}</p>
        </button>
    )
}