export const Ajout = ({label,action}) => {
    return (
        <div onClick={action}>
            <p>{label}</p>
        </div>
    )
}