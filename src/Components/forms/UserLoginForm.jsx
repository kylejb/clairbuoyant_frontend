import React, { useState } from 'react';  
import { Button, Form, Header, Image, Message, Input, Container } from 'semantic-ui-react';

const UserLoginForm = props => {
    const [email, setEmail] = useState(""),
    [password, setPassword] = useState("");

     
    return (

       <Container>
          <Header as='h2' color='teal' textAlign='center'>
            <Image src='/logo.png' /> Login to your account
          </Header>
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
      </Container>
    );
}

export default UserLoginForm;
