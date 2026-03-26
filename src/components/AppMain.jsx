import { useNavigate } from "react-router-dom"
import { getFlag, showStars } from "../utils/helpers"

export default function AppMain({ film, serie }) {

    const navigate = useNavigate()

    return (
        <>
            <main>
                <div className="container py-3">
                    <div className="row">
                        {film.map((singleFilm) => (
                            <div className="col g-3" key={singleFilm.id} >
                                <div className="card border-3" style={{ width: "18rem" }}>
                                    <img className="img-fluid" src={`https://image.tmdb.org/t/p/w342${singleFilm.poster_path}`} alt="film poster" />

                                    <div className="overlay p-3">
                                        <div className="card-body">
                                            <h5 className="card-title text-warning">{singleFilm.title}</h5>
                                            <p className="card-text">Titolo originale:<br /><strong>{singleFilm.original_title}</strong></p>
                                            {/* <li className="list-group-item">{getFlag(singleFilm.original_language)}</li> */}
                                            <p className="card-text">Voto: {showStars(singleFilm.vote_average)}</p>
                                            <p className="card-text">{singleFilm.overview.slice(0, 130)}...</p>
                                            <button 
                                            onClick={()=> navigate(`/movie/${singleFilm.id}`)}
                                            className="btn btn-danger">
                                                Guarda ora
                                                </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="row">
                        {serie.map((singleSerie) => (
                            <div className="col g-3" key={singleSerie.id}>
                                <div className="card" style={{ width: "18rem" }}>
                                    <img src={`https://image.tmdb.org/t/p/w342${singleSerie.poster_path}`} alt="film poster" />

                                    <div className="overlay p-3">
                                        <div className="card-body">
                                            <h5 className="card-title">{singleSerie.name}</h5>
                                            <p className="card-text">Titolo originale: <br /><strong>{singleSerie.original_name}</strong></p>
                                            {/* <p className="card-text">{getFlag(singleSerie.original_language)}</p> */}
                                            <p className="card-text">Voto: {showStars(singleSerie.vote_average)}</p>
                                            <p className="card-text">{singleSerie.overview.slice(0, 130)}...</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </>
    )
}