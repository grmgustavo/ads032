import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import './Layout.css'

export default function Layout () {
    return (
        <>
            <header>
                <h1>@Contatos</h1>
                <Navbar />
                <footer>
                    <p>Copyright 2023</p>
                </footer>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    );
}