
import { AppBar, Toolbar, styled } from '@mui/material';

import { NavLink } from 'react-router-dom';


const Header = styled(AppBar)`
    background: #111111;
`;
    
const Tabs = styled(NavLink)`
    color: #FFFFFF;
    margin-right: 20px;
    text-decoration: none;
    font-size: 20px;
`;

const NavBar = () => {
    return (
        <Header position="static">
            <Toolbar>
                <Tabs to="./" exact>Movie World</Tabs>
                <Tabs to="all" exact>All Movies</Tabs>
                <Tabs to="add" exact>Add Movie</Tabs>
                {/* <Tabs to="search" exact>Search Movie</Tabs> */}

            </Toolbar>
        </Header>
    )
}

export default NavBar;