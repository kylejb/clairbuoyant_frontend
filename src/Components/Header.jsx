import { Link, withRouter } from 'react-router-dom';
import { Container, Dropdown, Menu, Icon } from 'semantic-ui-react';

const Header = () => {
  const currentUser = JSON.parse(localStorage.getItem('loggedIn'));

  return (
    <Menu fixed='top' stackable inverted>
      <Container>
        <Menu.Item as='a' header>
        <Icon size='large' name='sun outline' />
          clairBuoyant
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
              <Dropdown.Item>Unavailable</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
        {currentUser ? <Menu.Item>Logout</Menu.Item> : <Menu.Item as={Link} to='/login'>Login</Menu.Item>}
      </Container>
    </Menu>
  );
}

export default withRouter(Header);
