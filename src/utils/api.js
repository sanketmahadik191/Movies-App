import axios from "axios";

const baseURL = "https://api.themoviedb.org/3";

const tmdbToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTY5MWM4ZjU4ZDE3YTJkMWVhNzM5OGJlNDMyMmIzOCIsInN1YiI6IjY2MGNkMWFlMzU4MThmMDE3YzNiYWYyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oc47Y0VtSfwed7hS7RO5BZL7NQKTbJE59l-qEykCat0"

if (!tmdbToken) {
    throw new Error("Token is not provided");
}

const headers = {
    Authorization: `Bearer ${tmdbToken}`,
}

const fetchData = async (url, params) => {
    try {
        const { data } = await axios.get(baseURL + url, {
            headers,
            params
        });
        return data;
    } catch (error) {
        throw new Error(`Error fetching data from ${url}: ${error.message}`);
    }
}

export default fetchData;
