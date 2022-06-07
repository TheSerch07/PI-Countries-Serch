export default function Pagination({countriesPerPage, countries, pagination}) {
    const pageNumbers = []

    for (let i = 0; i < Math.ceil(countries/countriesPerPage); i++) {
        pageNumbers.push(i+1)
    }

    return (
        <nav>
        <ul>
            {
                pageNumbers && pageNumbers.map((number) => {
                    return <li key={number}>
                        <button onClick={() => pagination(number)} >{number}</button>
                    </li>
                })
            }
        </ul>
        </nav>
    )
}