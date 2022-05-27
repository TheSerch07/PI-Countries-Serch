export default function Countries() {
    return (
        <div>Soy countries</div>
    )
}

function mapStateToProps(state) {
    return {
        countries: state.countries
    }
}

