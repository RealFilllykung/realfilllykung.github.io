import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import AppBarOptions from './AppBarOptions.json'
import Button from 'react-bootstrap/Button'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../images/logo.png'

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
                <Link to={option.link}>
                    <Button variant="outline-light" >{option.text}</Button>
                </Link>
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
            <Navbar.Brand href="/">
                <img
                    alt=""
                    src={Logo}
                    width="40"
                    height="40"
                    className="d-inline-block align-top"
                />{' '}
            </Navbar.Brand>
            <AppBarOption></AppBarOption>
            </Container>
          </Navbar>
        )
    }
}

export default Appbar;