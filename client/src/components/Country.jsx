export default function Country( {name, flag, continent} ) {
    return (
        <div>
            <h1>{name}</h1>
            <img src={flag} alt="flag" />
            <h2>{continent}</h2>
        </div>
    )
}