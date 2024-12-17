// Link su nome, mostrare a schermo mail, numero di telefono e codice fiscale
import TravelCustomers from '../data/TravelCostumers.js';

// importare dati array
// importare link da task 2
// aspettiamo prop del singolo customer da task 2

export default function UserDetailsCard() {
    return (
        <div>

            {/* correggi il map */}
            {TravelCustomers.map(customer => {
                <ul>
                    <li key={index}>
                        <p>
                            email
                        </p>
                        <p>
                            telefono
                        </p>
                        <p>
                            codice fiscale
                        </p>
                    </li>
                </ul>
            })}
        </div>
    )
}