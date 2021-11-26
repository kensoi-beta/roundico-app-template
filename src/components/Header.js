import { useEffect, useState } from 'react';
import './../css/Header.css';
import RoundICO from './../img/roundico.svg';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

function Logo() {
    return <div className="header-logo">
        <img src={RoundICO} alt="RoundICO"/>
        {/* <div className="title">kensoi</div>
        <div className="page-status">dev</div> */}
    </div>
}
function Menu() {
    return <div className="header-menu">
        <a href="https://kensoi.ru/repos/">
            <div className="header-menu-button">
                dshdev
            </div>
        </a>
        <a href="https://kensoi.ru/packages/">
            <div className="header-menu-button">
                packages
            </div>
        </a>
    </div>
}

function Optional() {
    return <a href="#footer">
        <div className="header-menu-button to-footer">
            <ArrowDownwardIcon />
        </div>
    </a>
}
function MobileHeader () {
    return <div className="header-container">
        <div className="header-content">
            <Logo />
            <Menu />
            <Optional />
        </div>
    </div>
}
function WebHeader () {
    return <div className="header-container">
        <div className="header-content">
            <Logo />
            <Menu />
            <Optional />
        </div>
    </div>
}
function Header() {
    let MobileDetect = require('mobile-detect');
    const [MobileUA, setMobileUA] = useState(new MobileDetect(window.navigator.userAgent).mobile());
    // eslint-disable-next-line
    useEffect(() => {setMobileUA(new MobileDetect(window.navigator.userAgent).mobile())}, [MobileDetect, window.navigator.userAgent])
    return MobileUA ? <MobileHeader /> : <WebHeader /> 
}

export default Header;
