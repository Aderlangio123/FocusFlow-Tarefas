import { Header } from "../Header/header";
import { Outlet } from "react-router-dom";

export function Layout() {
    return (
        <>
            <Header/>
            <Outlet/>
        </>
    )
}