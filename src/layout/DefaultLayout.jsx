import { Outlet } from "react-router-dom";
import Header from "../components/Header"
import Footer from "../components/Footer"


export default function DefaultLayout() {
    return (
        <>
            <Header />
            <main className="p-4" style={{minHeight: '90vh'}}>
                <Outlet />
            </main>
            <Footer />



        </>
    )
}