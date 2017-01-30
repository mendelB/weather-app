import React, { Component } from 'react';
import {Button, Form, FormGroup, FormControl, Navbar, Nav, NavItem} from 'react-bootstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar className="MyNav">
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Weather App</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem>
                <Form inline className="Form">
                  <FormGroup controlId="formInlineName">
                    <FormControl type="text" placeholder="New York, NY" />
                    {' '}
                    <Button bsStyle="success" bsSize="small">Get Weather</Button>
                  </FormGroup>
                </Form>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        { this.props.children }
      </div>
    );
  }
}

export default App;
