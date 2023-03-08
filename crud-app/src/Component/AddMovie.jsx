import react, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { addMovie } from '../Service/api';
import { useNavigate } from 'react-router-dom';

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
        margin-top: 20px;
`;

const AddMovie = () => {
    const [movie, setMovie] = useState(initialValue);
    const { name, actor, actress, director,year,camera,producer,language, } = movie;
    
    let navigate = useNavigate();

    const onValueChange = (e) => {
        setMovie({...movie, [e.target.name]: e.target.value})
    }

    const addMovieDetails = async() => {
        await addMovie(movie);
        navigate('/all');
    }

    return (
        <Container>
            <Typography variant="h4">Add Movie</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Movie Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Actor</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='actor' value={actor} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Actress</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='actress' value={actress} id="my-input"/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Director</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='director' value={director} id="my-input"/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Year</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='year' value={year} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Camera</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='camera' value={camera} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Producer</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='producer' value={producer} id="my-input"/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Language</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='language' value={language} id="my-input"/>
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => addMovieDetails()}>Add Movie</Button>
            </FormControl>
        </Container>
    )
}

export default AddMovie;