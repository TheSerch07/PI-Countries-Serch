import {Link} from "react-router-dom"

export default function Landing() {
    return (
        <div>
            <h1>Welcome to Countries App!</h1>
            <Link to="/home">
                <button>Get Into!</button>
            </Link>
            <h6>From Serch</h6>
            <img src="" alt="Logo"/>
        </div>
    )
}