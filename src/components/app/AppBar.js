import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import AppBarOptions from './AppBarOptions.json'

class AppBarOption extends React.Component{
    render(){
        const options = AppBarOptions
        
        const optionsList = options.map((option) => 
            <Nav.Link href={option.link}>
                {option.text}
            </Nav.Link>
        )

        return(
            <Nav className="justify-content-end">
              {optionsList}
            </Nav>
        )
    }
}

class Appbar extends React.Component{
    render(){
        return(
            <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="/">Filllykung</Navbar.Brand>
            <AppBarOption></AppBarOption>
            </Container>
          </Navbar>
        )
    }
}

export default Appbar;