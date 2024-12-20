import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

// Link su nome, mostrare a schermo mail, numero di telefono e codice fiscale
import TravelCustomers from '../data/TravelCostumers.js';

// importare dati array
// importare link da task 2
// aspettiamo prop del singolo customer da task 2

export default function UserDetailsCard() {
    const { id, citta_del_viaggio } = useParams();
    const customer = TravelCustomers.find(customer => customer.id === parseInt(id) && customer.citta_del_viaggio === citta_del_viaggio)
    const navigate = useNavigate()
    const handleButton = () => {

        navigate(-1)

    }

    return (
        <>
            <div className='card card-details'>
                <h3 className='py-2 text-center card-header'>
                    Profilo utente
                </h3>

                <ul className="list-unstyled py-2 text-center" key={customer.id}>
                    <li >
                        <img src={customer.image_profilo} alt="Immagine profilo" />
                        <p>
                            Mail: {customer.email}
                        </p>
                        <p>
                            Numero di telefono: {customer.numero}
                        </p>
                        <p>
                            Codice fiscale: {customer.codice_fiscale}
                        </p>
                    </li>
                </ul>

                <div className='btn'>
                    <button className='btn btn-danger' onClick={handleButton}>
                        Torna ai nomi
                    </button>
                </div>


            </div>
        </>
    )
}