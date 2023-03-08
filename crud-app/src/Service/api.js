import axios from 'axios';

// const usersUrl = 'http://localhost:3003/users';
const moviesUrl = 'http://localhost:8080';

export const getMovies = async (id) => {
    id = id || '';
    return await axios.get(`${moviesUrl}/${id}`);
}

export const addMovie = async (movie) => {
    return await axios.post(`${moviesUrl}/add`, movie);
}

export const deleteMovie = async (id) => {
    return await axios.delete(`${moviesUrl}/${id}`);
}

export const editMovie = async (id, movie) => {
    return await axios.put(`${moviesUrl}/${id}`, movie)
}
// export const searchMovie = async (movie) => {
//     return await axios.post(`${moviesUrl}/search`, movie);
// }