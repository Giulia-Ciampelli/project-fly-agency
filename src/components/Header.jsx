import { Link } from "react-router-dom"
export default function Header() {
    return (
        <>
            <header className="d-flex align-items-center justify-content-between p-2 bg-primary mb-4">
                <Link style={{ textDecoration: 'none' }} to={"/"}><h1 className="text-black">Logo azienda</h1></Link>
                <h2>nome dell'azienda</h2>
            </header>
        </>
    )
}