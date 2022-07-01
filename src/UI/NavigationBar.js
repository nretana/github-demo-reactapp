import {Navbar, Nav, Container } from 'react-bootstrap';

const NavigationBar = () => {
    return(
        <Navbar fixed="top" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="ms-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Product</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    <Nav.Link href="#pricing">About Us</Nav.Link>
                </Nav>
            </Container>
      </Navbar>
    )
};

export default NavigationBar;