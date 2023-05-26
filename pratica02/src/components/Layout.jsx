import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Layout () {
    return (
        <>
            <header>
                <h1>@Contatos</h1>
                <Navbar />
                <Outlet />
                <footer>
                    <p>Copyright 2023</p>
                </footer>
            </header>
        </>
    );
}