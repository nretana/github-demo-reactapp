import { Navbar, Nav, Container } from 'react-bootstrap';

import styles from './NavigationBar.module.scss';

const NavigationBar = () => {
    return(
        <Navbar fixed="top" variant="dark" className={styles['bg-dark']}>
            <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="ms-auto">
                    <Nav.Link href="#home" className={styles['nav-link']}>Home</Nav.Link>
                    <Nav.Link href="#features" className={styles['nav-link']}>Product</Nav.Link>
                    <Nav.Link href="#pricing" className={styles['nav-link']}>Pricing</Nav.Link>
                    <Nav.Link href="#pricing" className={styles['nav-link']}>About Us</Nav.Link>
                </Nav>
            </Container>
      </Navbar>
    )
};

export default NavigationBar;