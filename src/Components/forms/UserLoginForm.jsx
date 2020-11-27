import React, { useState } from 'react';  
import { Button, Form, Header, Icon, Message, Input, Grid } from 'semantic-ui-react';

const UserLoginForm = props => {
    const [email, setEmail] = useState(""),
    [password, setPassword] = useState("");

     
  return (   
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
          <Icon size='large' name='sun outline' />
            the Beach Buoys! 
          </Header>
            Login to your account
          <Form>
            <Form.Group width="equal">
              <Form.Field 
                control={Input} 
                icon='user' 
                iconPosition='left' 
                label='email'
                placeholder='E-mail address'
                value={email}
                onChange={e => setEmail(e.target.value)}
                 />
              <Form.Field
                control={Input}
                icon='lock'
                iconPosition='left'
                type='password'
                label='password'
                placeholder='Password'
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
    
              <Button 
                color='teal' 
                size='large'
                onClick={() => props.handleUserLogin(email, password)}
              >
                Login
              </Button>
            </Form.Group>
          </Form>
          <Message>
            {/* eslint-disable-next-line */}
            New to us? <a>Sign Up</a>
          </Message>
      </Grid.Column>
    </Grid> 
  );
}

export default UserLoginForm;
