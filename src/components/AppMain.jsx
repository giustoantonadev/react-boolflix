import { getFlag, showStars } from "../utils/helpers"

export default function AppMain({ film, serie }) {


    return (
        <>
            <main>
                <div className="container py-5">
                    <div className="row">
                        {film.map((singleFilm) => (
                            <div className="col g-3" key={singleFilm.id} >
                                <div className="card" style={{ width: "18rem" }}>
                                    <img className="img-fluid" src={`https://image.tmdb.org/t/p/w342${singleFilm.poster_path}`} alt="film poster" />

                                    <div className="overlay p-3">
                                        <div className="card-body">
                                            <h5 className="card-title">Titolo: {singleFilm.title}</h5>
                                            <p className="card-text">TItolo originale: {singleFilm.original_title}</p>                                                                
                                            {/* <li className="list-group-item">{getFlag(singleFilm.original_language)}</li> */}
                                            <p className="card-text">Voto: {showStars(singleFilm.vote_average)}</p>
                                            <p className="card-text">Overview: {singleFilm.overview.slice(0, 150)}...</p>
                                        
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="row">
                        {serie.map((singleSerie) => (
                            <div className="col" key={singleSerie.id}>
                                <div className="card" style={{ width: "18rem" }}>
                                    <img src={`https://image.tmdb.org/t/p/w342${singleSerie.poster_path}`} alt="film poster" />
                                    <div className="card-body">
                                        <h5 className="card-title">{singleSerie.name}</h5>
                                        <p className="card-text">{singleSerie.original_name}</p>
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">{getFlag(singleSerie.original_language)}</li>
                                        <li className="list-group-item">{showStars(singleSerie.vote_average)}</li>
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </>
    )
}