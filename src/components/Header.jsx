import { Link } from "react-router-dom"
export default function Header() {
    return (
        <>
            <header className="d-flex align-items-center justify-content-between p-2 bg-success">
                <Link style={{ textDecoration: 'none' }} to={"/"}><img className="bg-success" src="1.png" alt="" /></Link>
                <h2>nome dell'azienda</h2>

            </header>
        </>
    )
}