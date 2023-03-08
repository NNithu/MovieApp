import react, { useState, useEffect } from 'react';
import { Table, TableHead, TableCell, Paper, TableRow, TableBody, Button, styled } from '@mui/material'
import { getMovies, deleteMovie } from '../Service/api';
import { Link } from 'react-router-dom';

const StyledTable = styled(Table)`
    width: 90%;
    margin: 50px 0 0 50px;
`;

const THead = styled(TableRow)`
    & > th {
        font-size: 20px;
        background: #000000;
        color: #FFFFFF;
    }
`;

const TRow = styled(TableRow)`
    & > td{
        font-size: 18px
    }
`;

const AllMovies = () => {
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        getAllMovies();
    }, []);

    const deleteMovieData = async (id) => {
        await deleteMovie(id);
        getAllMovies();
    }

    const getAllMovies = async () => {
        let response = await getMovies();
        setMovies(response.data);
    }

    return (
        <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Actor</TableCell>
                    <TableCell>Actress</TableCell>
                    <TableCell>Director</TableCell>
                    <TableCell>Year</TableCell>
                    <TableCell>Camera</TableCell>
                    <TableCell>Producer</TableCell>
                    <TableCell>Language</TableCell>
                    <TableCell>Actions</TableCell>
                </THead>
            </TableHead>
            <TableBody>
                {movies.map((movie) => (
                    <TRow key={movie.id}>
                        <TableCell>{movie._id}</TableCell> {/* change it to movie.id to use JSON Server */}
                        <TableCell>{movie.name}</TableCell>
                        <TableCell>{movie.actor}</TableCell>
                        <TableCell>{movie.actress}</TableCell>
                        <TableCell>{movie.director}</TableCell>
                        <TableCell>{movie.year}</TableCell>
                        <TableCell>{movie.camera}</TableCell>
                        <TableCell>{movie.producer}</TableCell>
                        <TableCell>{movie.language}</TableCell>

                        <TableCell>
                            <Button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${movie._id}`}>Edit</Button> {/* change it to movie.id to use JSON Server */}
                            <Button color="secondary" variant="contained" onClick={() => deleteMovieData(movie._id)}>Delete</Button> {/* change it to movie.id to use JSON Server */}
                        </TableCell>
                    </TRow>
                ))}
            </TableBody>
        </StyledTable>
    )
}

export default AllMovies;