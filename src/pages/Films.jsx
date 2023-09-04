import { useState, useEffect } from "react";
import {getSearch} from "service/themoviedbApi";
import Notiflix from "notiflix";
import {useSearchParams, userSearchParams} from "react-router-dom";
import FilmGallery from "../components/FilmGallery/FilmGallery";
import {Loader} from "../components/Loader/Loader";

import {GlowinBtn} from "../components/Layout/Layout.styled";
import {text} from "../components/Cast/Cast.styled";

const Films = () => {
    const [SearchParams, setSearchParams] = useSearchParams();
    const [loading, setLoading] = useState(false);
    const [query, setQuery] = useState("");
    const [films, setFilms] = useState([]);
    const searchTitle = SearchParams.get("query");
    const [noFilms, setNoFilms] = useState(false);
}

useEffect(() => {
    const filmTrading = async () => {
        if(!searchTitle) {
            return;
        }
        setLoading(true);
        try{
            const film = await getSearch(searchTitle);
            setFilms(film);
            if(film.length === 0) {
                setNoFilms(true);
            } else {
                setNoFilms(false);
            }
        } catch (error) {
            console.log("error");
        } finally {
            setLoading(false);
        }
    };
    filmTrading();
}, [searchTitle]);

const handleNameChange = event => {
    setQuery(event.currentTarget.value.toLowerCase());
};

export default Films;