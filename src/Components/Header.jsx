import React, { useState, useEffect } from 'react';
import HeaderSearch from './HeaderSearch';
import { Link, withRouter } from 'react-router-dom';
import { Container, Dropdown, Menu, Icon } from 'semantic-ui-react';

const Header = props => {
    const [namedBeaches, setNamedBeaches] = useState([]);
    const currentUser = JSON.parse(localStorage.getItem('loggedIn'));

    const getNamedBeaches = async () => {
        const response = await fetch('http://localhost:3000/api/v1/beaches');
        let data = await response.json();
        setNamedBeaches(data);
    }

    useEffect(() => {
        getNamedBeaches();
    }, []);

    const parseUSANamedBeaches = () => {
        return namedBeaches.map(namedBeach => renderDropdownItem(namedBeach))
    }

    const renderDropdownItem = (beachObj) => {
        let urlPrefix = beachObj.name.replace(/\s+/g, '-').toLowerCase();
        // 'NY' needs to be dynamically rendered; best to adjust DB on backend to incorporate this field
        return (<Dropdown.Item key={beachObj.id} onClick={() => props.selectedBeachHelper(beachObj)} as={Link} to={`/forecast/${urlPrefix}`}>{beachObj.name}, NY</Dropdown.Item>)
    }


    return (
        <Menu fixed='top' stackable inverted>
            <Container>
                <Menu.Item as='a' header>
                <Icon size='large' name='sun outline' />
                    the Beach Buoys!
                </Menu.Item>
                <Menu.Item as={Link} to='/home'>Home</Menu.Item>
                <Dropdown item simple text='Forecasts'>
                <Dropdown.Menu>
                    <Dropdown.Item>
                        <i className='dropdown icon' />
                        <span className='text'>Surf Log</span>
                    <Dropdown.Menu>
                        <Dropdown.Item as={Link} to='/journal/new'>New Entry</Dropdown.Item>
                        <Dropdown.Item as={Link} to='/journal'>All Entries</Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to='/map'>2D Map View</Dropdown.Item>
                    <Dropdown.Item>Favorites</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Header>Regions</Dropdown.Header>
                    <Dropdown.Item>
                        <i className='dropdown icon' />
                        <span className='text'>USA</span>
                        <Dropdown.Menu>
                            {parseUSANamedBeaches()}
                        </Dropdown.Menu>
                    </Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
                {currentUser ? <Menu.Item>Logout</Menu.Item> : <Menu.Item as={Link} to='/login'>Login</Menu.Item>}
                <Menu.Item> <HeaderSearch beaches={namedBeaches} selectedBeachHelper={props.selectedBeachHelper}/> </Menu.Item>
            </Container>
        </Menu>
    );
}

export default withRouter(Header);