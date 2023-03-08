

import { Box, Typography, styled } from '@mui/material';

import mv1 from '../Assets/Images/movieworld.jpg';

const Header = styled(Box)`
    margin: 50px;
    & > div {
        margin-top: 50px;
    }
`;

const Image = styled('img')({
    width: '50%',
    height: '50%'
});

const MovieWorld = () => {

    return (
        <Header>
            <Typography variant="h4">Movie Datas</Typography>
            <Box style={{display: 'flex'}}>
                <Image src={mv1} />
                <Image src={mv1} />

            </Box>
        </Header>
    )
}

export default MovieWorld;