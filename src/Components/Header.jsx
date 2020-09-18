import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Dropdown, Image, Menu } from 'semantic-ui-react';

const Header = props => {
    return (
        <Container>
            <Menu fixed='top' stackable inverted>
            <Menu.Item as='a' header>
                <Image size='mini' src='/logo.png' style={{ marginRight: '1.5em' }} />
                Oh, Buoy!
            </Menu.Item>
            <Menu.Item as={Link} to='/home'>Home</Menu.Item>
            <Dropdown item simple text='Dropdown'>
            <Dropdown.Menu>
                <Dropdown.Item>List Item</Dropdown.Item>
                <Dropdown.Item>List Item</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Header>Header Item</Dropdown.Header>
                <Dropdown.Item>
                <i className='dropdown icon' />
                <span className='text'>Submenu</span>
                <Dropdown.Menu>
                    <Dropdown.Item>List Item</Dropdown.Item>
                    <Dropdown.Item>List Item</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown.Item>
                <Dropdown.Item>List Item</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>     
            <Menu.Item as={Link} to='/login'>Sign-in</Menu.Item>
            </Menu>
        </Container>
    );
}

export default Header;