import Custumers from '../data/TravelCostumers.js'

export default function getData() {
    return (
        <>
            <div className="container">
                <div className="row">
                    {Custumers.map(custumer => (
                        <ul className="list-unstyled card p-3 mb-3 text-center" key={custumer.id}>
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