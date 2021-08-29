import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import AppBarOptions from './AppBarOptions.json'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

class AppBarOption extends React.Component{
    render(){
        const options = AppBarOptions
        
        const optionsList = options.map((option, index) => {
            if (index === options.length - 1) return (
                <Link to="/projects">
                    <Button variant="success">{option.text}</Button>
                </Link>
                
            )
            return (
                <Nav.Link href={option.link}>
                    {option.text}
                </Nav.Link>
            )
        }
            
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