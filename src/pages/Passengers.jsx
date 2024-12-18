import Custumers from '../data/TravelCostumers.js'
import { useParams } from 'react-router-dom'

export default function getData() {

    const { citta_del_viaggio } = useParams()
    //é un filtro che quando schiacci sulla citta ti reinderizza la pagina dei partecipanti
    const filteredCustomers = Custumers.filter(custumer => custumer.citta_del_viaggio === citta_del_viaggio)

    return (
        <>
            <div className="container">
                <div className="row">
                    {filteredCustomers.map(custumer => (
                        <ul className="list-unstyled card p-3 mb-3 text-center" key={custumer.id}>
                            {/* cambiare la key da id a citta_del_viaggio */}
                            <li>
                                <div>{custumer.nome} {custumer.cognome} </div>

                            </li>
                        </ul>
                    ))}
                </div>
            </div>

        </>
    )
}