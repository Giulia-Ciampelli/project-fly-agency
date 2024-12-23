import { useState } from "react";
import TravelCostumers from "../data/TravelCostumers";
import { Link } from "react-router-dom";


export default function Home() {
    const [searchUser, setSearchUser] = useState('')
    const filteredSearch = TravelCostumers.filter(custumer => custumer.citta_del_viaggio.toLowerCase().includes(searchUser.toLowerCase()))

    function handleForm(e) {
        e.preventDefault()
    }


    return (
        <div className="container">
            <form onChange={handleForm}>
                <div className='mb-5 input-search'>
                    <input type="search" className='form-control' name='searchText' id='searchText' aria-describedby='searchHelper' placeholder='search for the trip' value={searchUser} onChange={e => setSearchUser(e.target.value)} />
                </div>
            </form>
            <div className="row">
                <div className="col d-flex flex-wrap">

                    {
                        filteredSearch.map(travel => (
                            <div className="card p-3 mb-3 text-center" key={travel.id}>
                                <img src={travel.image} alt="" />
                                <h3>{travel.citta_del_viaggio}</h3>
                                <p className="text-success fs-5">Partenza: {travel.data_inizio}</p>
                                <p className="text-danger fs-5">Ritorno: {travel.data_fine}</p>
                                <div><Link to={`custumers/${travel.citta_del_viaggio}`}><button className="btn bg-primary text-white" >Details</button></Link></div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}