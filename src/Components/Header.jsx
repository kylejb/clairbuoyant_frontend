import React from 'react';
import HeaderSearch from './HeaderSearch';
import { Link } from 'react-router-dom';
import { Container, Dropdown, Image, Menu } from 'semantic-ui-react';

const Header = props => {
    return (
        <Container>
            <Menu fixed='top' stackable inverted>
            <Menu.Item as='a' header>
                <Image size='mini' src='/logo.png' style={{ marginRight: '1.5em' }} />
                Sea State
            </Menu.Item>
            <Menu.Item as={Link} to='/home'>Home</Menu.Item>
            <Dropdown item simple text='Forecasts'>
            <Dropdown.Menu>
                <Dropdown.Item>Placeholder List Items</Dropdown.Item>
                <Dropdown.Item>Favorites</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Header>Regions</Dropdown.Header>
                <Dropdown.Item>
                    <i className='dropdown icon' />
                    <span className='text'>USA</span>
                    <Dropdown.Menu>
                        <Dropdown.Item as={Link} to='/rockawaybeach-surf-report'>Rockaway Beach, NY</Dropdown.Item>
                        <Dropdown.Item as={Link} to='/longbeach-surf-report'>Long Beach, NY</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown.Item>
                <Dropdown.Item>
                    <i className='dropdown icon' />
                    <span className='text'>Canada</span>
                <Dropdown.Menu>
                    <Dropdown.Item as={Link} to='/tofino-surf-report'>Tofino, BC</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown.Item>
                {/* <Dropdown.Item>Placeholder List Item</Dropdown.Item> */}
            </Dropdown.Menu>
            </Dropdown>     
            <Menu.Item as={Link} to='/login'>Sign-in</Menu.Item>
            <Menu.Item> <HeaderSearch /> </Menu.Item>
            </Menu>
        </Container>
    );
}

export default Header;