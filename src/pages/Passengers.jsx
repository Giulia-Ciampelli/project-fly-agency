import Custumers from '../data/TravelCostumers.js'

export default function getData() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="card">
                        {Custumers.map(custumer => (
                            <ul className="list-unstyled" key={custumer.id}>
                                <li>
                                    <div>{custumer.nome} {custumer.cognome} </div>

                                </li>
                            </ul>
                        ))}
                    </div>
                </div>
            </div>

        </>
    )
}