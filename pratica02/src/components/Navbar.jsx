import { NavLink } from "react-router-dom"
import './Navbar.css'

export default function Navbar () {
    return (
        <ul>
            <li>
                <NavLink to="/novo" end activeClassName="active">Novo Contato</NavLink>
            </li>
        </ul>
    )
}