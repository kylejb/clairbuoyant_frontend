import React, { useState, useEffect } from 'react';
import HeaderSearch from './HeaderSearch';
import { Link, withRouter } from 'react-router-dom';
import { Container, Dropdown, Image, Menu } from 'semantic-ui-react';

const Header = props => {
    const [namedBeaches, setNamedBeaches] = useState([]);
    // const currentUser = JSON.parse(localStorage.getItem('loggedIn'));

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
            <Menu.Item as='a' header>
                <Image size='mini' src='/logo.png' style={{ marginRight: '1.5em' }} />
                Sea State
            </Menu.Item>
            <Menu.Item as={Link} to='/home'>Home</Menu.Item>
            <Dropdown item simple text='Forecasts'>
            <Dropdown.Menu>
                <Dropdown.Item as={Link} to='/journal'>Surf Log</Dropdown.Item>
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
                {/* <Dropdown.Item>
                    <i className='dropdown icon' />
                    <span className='text'>Canada</span>
                <Dropdown.Menu>
                    <Dropdown.Item as={Link} to='/forecast/tofino'>Tofino, BC</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown.Item> */}
            </Dropdown.Menu>
            </Dropdown>     
            <Menu.Item as={Link} to='/login'>Sign-in</Menu.Item>
            <Menu.Item> <HeaderSearch beaches={namedBeaches} selectedBeachHelper={props.selectedBeachHelper}/> </Menu.Item>
            </Menu>
    );
}

export default withRouter(Header);