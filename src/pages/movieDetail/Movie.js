import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./Movie.css";

const Movie = () => {

    const [MovieDetail, setMovieDetail] = useState()
    const { id } = useParams();

    useEffect(() => {
        getData()
        window.scrollTo(0,0)
    }, [])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
        .then(res => res.json())
        .then(data => setMovieDetail(data))
    } 
    return (
    <div className="m">
    <div className="m_i">
        <img className="m_b" src={`https://image.tmdb.org/t/p/original${MovieDetail ? MovieDetail.backdrop_path : ""}`} />
    </div>
    <div className="m_d">
        <div className="m_dl">
            <div className="m_pb">
                <img className="m_p" src={`https://image.tmdb.org/t/p/original${MovieDetail ? MovieDetail.poster_path : ""}`} />
            </div>
        </div>
        <div className="m_dr">
            <div className="m_drt">
                <div className="m_n">{MovieDetail ? MovieDetail.original_title : ""}</div>
                <div className="m_t">{MovieDetail ? MovieDetail.tagline : ""}</div>
                <div className="m_r">
                    {MovieDetail ? MovieDetail.vote_average: ""} <i class="fas fa-star" />
                    <span className="m_v">{MovieDetail ? "(" + MovieDetail.vote_count + ") votes" : ""}</span>
                </div>  
                <div className="m_rt">{MovieDetail ? MovieDetail.runtime + " mins" : ""}</div>
                <div className="m_rd">{MovieDetail ? "Release date: " + MovieDetail.release_date : ""}</div>
                <div className="m_gs">
                    {
                        MovieDetail && MovieDetail.genres
                        ? 
                        MovieDetail.genres.map(genre => (
                            <><span className="m_g" id={genre.id}>{genre.name}</span></>
                        )) 
                        : 
                        ""
                    }
                </div>
            </div>
            <div className="m_drb">
                <div className="st">Synopsis</div>
                <div>{MovieDetail ? MovieDetail.overview : ""}</div>
            </div>
            
        </div>
    </div>
    <div className="m_l">
        <div className="m_h">Useful Links</div>
        {
            MovieDetail && MovieDetail.homepage && <a href={MovieDetail.homepage} target="_blank" style={{textDecoration: "none"}}><p><span className="movie__homeButton movie__Button">Homepage <i className="newTab fas fa-external-link-alt"></i></span></p></a>
        }
        {
            MovieDetail && MovieDetail.imdb_id && <a href={"https://www.imdb.com/title/" + MovieDetail.imdb_id} target="_blank" style={{textDecoration: "none"}}><p><span className="movie__imdbButton movie__Button">IMDb<i className="newTab fas fa-external-link-alt"></i></span></p></a>
        }
    </div>
    <div className="m_h">Production companies</div>
    <div className="m_p">
        {
            MovieDetail && MovieDetail.production_companies && MovieDetail.production_companies.map(company => (
                <>
                    {
                        company.logo_path 
                        && 
                        <span className="pci">
                            <img className="m_pc" src={"https://image.tmdb.org/t/p/original" + company.logo_path} />
                            <span>{company.name}</span>
                        </span>
                    }
                </>
            ))
        }
    </div>
</div>
)
}

export default Movie