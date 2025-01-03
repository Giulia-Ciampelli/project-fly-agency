import Custumers from '../data/TravelCostumers.js'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function getData() {
    const [searchUser, setSearchUser] = useState('')

    const { citta_del_viaggio } = useParams()
    //é un filtro che quando schiacci sulla citta ti reinderizza la pagina dei partecipanti
    const filteredCustomers = Custumers.filter(custumer => custumer.citta_del_viaggio === citta_del_viaggio)
    const filteredSearch = filteredCustomers.filter(custumer => custumer.nome.toLowerCase().includes(searchUser.toLowerCase()) || custumer.cognome.toLowerCase().includes(searchUser.toLowerCase()))

    function handleForm(e) {
        e.preventDefault()
    }

    return (
        <>


            <div className="container">
                <form onChange={handleForm}>
                    <div className='mb-5 input-search'>
                        <input type="search" className='form-control' name='searchText' id='searchText' aria-describedby='searchHelper' placeholder='search...' value={searchUser} onChange={e => setSearchUser(e.target.value)} />
                    </div>
                </form>
                <div className="row">
                    {filteredSearch.map(custumer => (
                        <ul className="list-unstyled card p-3 mb-3 text-center" key={custumer.id}>
                            {/* cambiare la key da id a citta_del_viaggio */}
                            <li>
                                <Link className='text-decoration-none text-dark' to={`/custumers/${custumer.citta_del_viaggio}/${custumer.id}`}>
                                    <div>{custumer.nome} {custumer.cognome} </div>
                                </Link>
                            </li>
                        </ul>
                    ))}
                    <Link to='/'>
                        <button className='btn btn-danger mt-5'>Torna alla Home</button>
                    </Link>
                </div>
            </div>

        </>
    )
}