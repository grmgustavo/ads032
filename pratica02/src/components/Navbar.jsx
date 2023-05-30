import { NavLink } from "react-router-dom"
import './Navbar.css'

export default function Navbar () {
    return (
        <ul>
            <li>
                <NavLink to="/" end activeClassName="active">Meus Contatos </NavLink>
                <NavLink to="/novo" end activeClassName="active">Novo Contato</NavLink>
            </li>
        </ul>
    )
}