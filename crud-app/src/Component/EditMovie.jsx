import { useState, useEffect } from 'react';

import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { getMovies, editMovie } from '../Service/api';

const initialValue = {

    name: '',
    actor: '',
    actress: '',
    director: '',
    year: '',
    camera: '',
    producer: '',
    language: '',
}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px
`;

const EditMovie = () => {
    const [movie, setMovie] = useState(initialValue);
    const { name, actor, actress, director,year,camera,producer,language, } = movie;

    const { id } = useParams();
    
    let navigate = useNavigate();

    useEffect(() => {
        loadMovieDetails();
    }, []);

    const loadMovieDetails = async() => {
        const response = await getMovies(id);
        setMovie(response.data);
    }

    const editMovieDetails = async() => {
        const response = await editMovie(id, movie);
        navigate('/all');
    }

    const onValueChange = (e) => {
        console.log(e.target.value);
        setMovie({...movie, [e.target.name]: e.target.value})
    }

    return (
        <Container injectFirst>
            <Typography variant="h4">Edit Movie Details</Typography>


            <FormControl>
                <InputLabel htmlFor="my-input">Movie Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input"  aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Actor</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='actor' value={actor} id="my-input"  aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Actress</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='actress' value={actress} id="my-input"  aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Director</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='director' value={director} id="my-input"  aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Year</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='year' value={year} id="my-input"  aria-describedby="my-helper-text"  />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Camera</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='camera' value={camera} id="my-input"   aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Producer</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='producer' value={producer} id="my-input"  aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Language</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='language' value={language} id="my-input"  aria-describedby="my-helper-text" />
            </FormControl>
          
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => editMovieDetails()}>Edit Movie</Button>
            </FormControl>
        </Container>
    )
}

export default EditMovie;