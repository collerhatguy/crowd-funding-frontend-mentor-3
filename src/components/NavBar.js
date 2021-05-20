import React, {useState} from 'react'
import burgerImg from "../images/icon-hamburger.svg"

export default function NavBar() {
    const [visible, setVisible] = useState(false)
    return (
        <nav>
            <img 
                onClick={() => setVisible(!visible)}
                id="burger-image" 
                src={burgerImg} />
            <div id="desktop-nav" data-visible={visible}>
                <a>About</a>       
                <a>Discover</a>       
                <a>Get Started</a>
            </div>
        </nav>
    )
}
