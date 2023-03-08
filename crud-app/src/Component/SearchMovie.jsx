// import react, { useState, useEffect } from 'react';
// import { Table, TableHead, TableCell, Paper, TableRow, TableBody, Button, styled, Typography, TextField } from '@mui/material'
// import { searchMovie,getMovies, deleteMovie } from '../Service/api';
// import { Link } from 'react-router-dom';

// const StyledTable = styled(Table)`
//     width: 90%;
//     margin: 50px 0 0 50px;
// `;

// const THead = styled(TableRow)`
//     & > th {
//         font-size: 20px;
//         background: #000000;
//         color: #FFFFFF;
//     }
// `;

// const TRow = styled(TableRow)`
//     & > td{
//         font-size: 18px
//     }
// `;

// const SearchMovies = () => {
//     const [movies, setMovies] = useState([]);
    
//     useEffect(() => {
//         getSearchMovies();
//     }, []);

//     const deleteMovieData = async (id) => {
//         await deleteMovie(id);
//         getSearchMovies();
//     }

//     const getSearchMovies = async () => {
//         let response = await searchMovie();
//         setMovies(response.data);
//     }

//     return (
//         <><Typography> Movie Search</Typography>
//         <br></br>
//         <TextField varient='outline' fullWidth label='Movie Name' value={movie.name} onChange={setMovies}></TextField>
//         <Button variant='contained' fullWidth color='primary' onClick={()=>searchCource()}></Button>
//         <StyledTable>
//             <TableHead>
//                 <THead>
//                     <TableCell>Id</TableCell>
//                     <TableCell>Name</TableCell>
//                     <TableCell>Actor</TableCell>
//                     <TableCell>Actress</TableCell>
//                     <TableCell>Director</TableCell>
//                     <TableCell>Year</TableCell>
//                     <TableCell>Camera</TableCell>
//                     <TableCell>Producer</TableCell>
//                     <TableCell>Language</TableCell>
//                     <TableCell>Actions</TableCell>
//                 </THead>
//             </TableHead>
//             <TableBody>
//                 {movies.map((movie) => (
//                     <TRow key={movie.id}>
//                         <TableCell>{movie._id}</TableCell> {/* change it to movie.id to use JSON Server */}
//                         <TableCell>{movie.name}</TableCell>
//                         <TableCell>{movie.actor}</TableCell>
//                         <TableCell>{movie.actress}</TableCell>
//                         <TableCell>{movie.director}</TableCell>
//                         <TableCell>{movie.year}</TableCell>
//                         <TableCell>{movie.camera}</TableCell>
//                         <TableCell>{movie.producer}</TableCell>
//                         <TableCell>{movie.language}</TableCell>

//                         <TableCell>
//                             <Button color="primary" variant="contained" style={{ marginRight: 10 }} component={Link} to={`/edit/${movie._id}`}>Edit</Button> {/* change it to movie.id to use JSON Server */}
//                             <Button color="secondary" variant="contained" onClick={() => deleteMovieData(movie._id)}>Delete</Button> {/* change it to movie.id to use JSON Server */}
//                         </TableCell>
//                     </TRow>
//                 ))}
//             </TableBody>
//         </StyledTable></>
//     )
// }

// export default SearchMovies;