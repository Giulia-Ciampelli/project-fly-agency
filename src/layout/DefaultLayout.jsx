import { Outlet } from "react-router-dom";


export default function DefaultLayout() {
    return (
        <>
            <Headers />
            <main>
                <Outlet />
            </main>
            <Footer />



        </>
    )
}