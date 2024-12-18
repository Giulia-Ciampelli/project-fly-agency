import { useParams } from 'react-router-dom';

// Link su nome, mostrare a schermo mail, numero di telefono e codice fiscale
import TravelCustomers from '../data/TravelCostumers.js';

// importare dati array
// importare link da task 2
// aspettiamo prop del singolo customer da task 2

export default function UserDetailsCard() {
    const { id } = useParams();
    const userFilter = TravelCustomers.filter(customer => customer.id === customer.id)

    return (
        <div>

            {/* correggo il map */}
            {TravelCustomers.map(customer => {

                return (
                    <ul>
                        <li key={customer.id}>
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

                )
            })}
        </div>
    )
}