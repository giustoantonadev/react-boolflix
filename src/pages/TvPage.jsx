import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { showStars } from "../utils/helpers"

export default function TvPage() {

    const { id } = useParams()
    const navigate = useNavigate()

    const [singleSerie, setSingleSerie] = useState()

    const API_KEY = import.meta.env.VITE_API_KEY
    const serie_url = `https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}&language=it-IT`


    useEffect(() => {
        fetch(serie_url)
            .then(res => res.json())
            .then(data => setSingleSerie(data))
    }, [id])

    if (!singleSerie) return <p>Caricamento...</p>

    return (

        <div className="container p-3 movie-page">
            <div className="row">
                <h1 className="text-center text-warning movie-title mb-4">{singleSerie.title}</h1>
                <div className="col-12 col-md-5 shadow rounded-2">
                    <img className="img-fluid movie-poster" src={`https://image.tmdb.org/t/p/w342${singleSerie.poster_path}`} />
                </div>

                <div className="col-12 col-md-7">

                    <div className="movie-info-box text-white text-start">

                        <p className="movie-overview">{singleSerie.overview}</p>
                        <p className="text-secondary mb-2">Titolo originale: {singleSerie.original_title}
                        </p>
                        <p className="text-warning fs-4 mb-3">
                            {showStars(singleSerie.vote_average)}
                        </p>
                        <button
                            className="btn btn-danger mt-3 px-4 py-2"
                            onClick={() => navigate(-1)}>
                            Torna indietro
                        </button>

                    </div>
                </div>

            </div>
        </div>
    )
}