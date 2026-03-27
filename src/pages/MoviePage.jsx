import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { showStars } from "../utils/helpers"

export default function MoviePage() {

    const { id } = useParams()
    const navigate = useNavigate()

    const [singleFilm, setSingleFilm] = useState()

    const API_KEY = import.meta.env.VITE_API_KEY
    const movie_url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=it-IT`


    useEffect(() => {
        fetch(movie_url)
            .then(res => res.json())
            .then(data => setSingleFilm(data))
    }, [id])

    if (!singleFilm) return <p>Caricamento...</p>

    return (



        <div className="container p-3 movie-page">
            <div className="row">
                <h1 className="text-center text-warning movie-title mb-4">{singleFilm.title}</h1>
                <div className="col-12 col-md-5 shadow rounded-2">
                    <img className="img-fluid movie-poster" src={`https://image.tmdb.org/t/p/w342${singleFilm.poster_path}`} />
                </div>

                <div className="col-12 col-md-7">

                    <div className="movie-info-box text-white text-start">

                    <p className="movie-overview">{singleFilm.overview}</p>
                    <p className="text-secondary mb-2">Titolo originale: {singleFilm.original_title}
                    </p>
                    <p className="text-warning fs-4 mb-3">
                        {showStars(singleFilm.vote_average)}
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