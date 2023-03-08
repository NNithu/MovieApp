import express from 'express';
import { addMovie, deleteMovie, editMovie, getMovieById, getMovies } from '../controller/movie-controller.js';

const router = express.Router();

router.get('/', getMovies);
router.post('/add', addMovie);
router.get('/:id', getMovieById);
router.put('/:id', editMovie);
router.delete('/:id', deleteMovie);

export default router;