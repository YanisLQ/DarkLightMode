import {Navbar, Button } from 'react-bootstrap'
import { useState } from 'react'
import Light from '../allumer.png';
import Dark from '../eteindre.png'
function Header({color, setColor}) {
    const [isRotated, setIsRotated] = useState(false);
    const onRotate = () => setIsRotated((rotated) => !isRotated)

    const changeColor = () => {
        onRotate();
        if(color === 'dark'){
            setColor('light')
        } else {
            setColor('black')
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
                {/* <Button className={`card ${isRotated ? 'rotated' : ''}`} variant={color} onClick={changeColor}>{color === 'dark' ? 'Blanc' : 'Noir'}</Button> */}
                <Button className={`card ${isRotated ? 'rotated' : ''}`} variant={color} onClick={changeColor}>{color === 'dark' ?      
                <img src={Dark} style={{width:20}} alt="button dark" /> : 
                <img src={Light} style={{width:20}} alt="button light" />
                }
                </Button>
            </Navbar.Brand>
        </Navbar>
    );
}

export default Header;