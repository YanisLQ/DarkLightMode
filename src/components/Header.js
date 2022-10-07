import {Navbar, Button } from 'react-bootstrap'
function Header({color, setColor}) {

    const changeColor = () => {
        if(color === 'dark'){
            setColor('light')
        } else {
            setColor('dark')
        }
    }

    return (
        <Navbar bg={color} variant={color}>
            <Navbar.Brand href="#home">
                Accueil
            </Navbar.Brand>
            <Navbar.Brand href="#NousContacter">
                Nous contacter
            </Navbar.Brand>
            <Navbar.Brand href="#">
                <Button variant={color} onClick={changeColor}>Change color</Button>
            </Navbar.Brand>
        </Navbar>
    );
}

export default Header;