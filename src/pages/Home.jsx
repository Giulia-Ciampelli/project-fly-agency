
import TravelCostumers from "../data/TravelCostumers";


export default function Home() {

    return (
        <div className="container ">
            <div className="row">
                <div className="col">

                    {
                        TravelCostumers.map(travel => (
                            <div className="card p-3 mb-3 text-center" key={travel.id}>
                                <h3>{travel.citta_del_viaggio}</h3>
                                <p>{travel.data_inizio}</p>
                                <p>{travel.data_fine}</p>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}