import { useParams } from 'react-router-dom';

// Link su nome, mostrare a schermo mail, numero di telefono e codice fiscale
import TravelCustomers from '../data/TravelCostumers.js';

// importare dati array
// importare link da task 2
// aspettiamo prop del singolo customer da task 2

export default function UserDetailsCard() {
    const { id, citta_del_viaggio } = useParams();
    const customer = TravelCustomers.find(customer => customer.id === parseInt(id) && customer.citta_del_viaggio === citta_del_viaggio)

    return (
        <div>


            <ul key={customer.id}>
                <li >
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



        </div>
    )
}