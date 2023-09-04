import axios from "axios";

const API_KEY = "391a97ba083a1d8591f2f4cbb9f29b09";

axios.defaults.baseURL="https://api.themoviedb.org/3";
axios.defaults.params = {
    api_key: API_KEY,
};