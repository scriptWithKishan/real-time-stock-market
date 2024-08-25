import { withRouter, Link } from "react-router-dom"
import { FaArrowRight } from "react-icons/fa";

import './index.css'

const Header = () => (
    <nav>
        <Link className="header-link" to="/">
            <h1 className="header-name">StockExchange</h1>
        </Link>
        <Link className="header-link" to="/dashboard">
            <FaArrowRight className="header-icon" />
            Dashboard
        </Link>
    </nav>
)

export default withRouter(Header)