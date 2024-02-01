export const Annuler = ({label, onClick}) => {
    return (
        <div onClick={onClick}>
            <p>{label}</p>
        </div>
    )
}