import { useEffect, useState } from 'react';
import './header-stylesheet.css';
import { Icon } from './../RoundICO'

import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ClearIcon from '@mui/icons-material/Clear';
import MenuIcon from '@mui/icons-material/Menu';
import {nanoid} from "nanoid";



function fixPos(content) {
    let scrollY = window.pageYOffset || document.documentElement.scrollTop;

    if (window.innerHeight < document.getElementById("footer").getBoundingClientRect().top + 64) {
        content.style.position = "fixed";
        content.style.top = "0px";
        window.actualpos = scrollY;
    }
    else {
        content.style.position = "absolute";
        content.style.top = window.actualpos + "px";
    }
}

function Logo({type, visible}) {
    return <a href="https://www.dshdev.ru">
        <div className={["header-logo", type, visible].join(" ")}>
            <Icon />
            {/* <div className="title">kensoi</div>
            <div className="page-status">dev</div> */}
        </div>
    </a>
}
var MenuList = [
    {
        name: "Repo Finder",
        href: "https://www.dshdev.ru/repos/",
        target: "_self"
    },
    {
        name: "VKBotKit",
        href: "https://www.dshdev.ru/vkbotkit/",
        target: "_self"
    },
    {
        name: "Libragram",
        href: "https://www.dshdev.ru/libragram/",
        target: "_self"
    },
    {
        name: "Канари",
        href: "https://www.dshdev.ru/canarybot/",
        target: "_self"
    }
]

const ScrollToFooter = () => {
    let block = document.getElementById("footer");
    let blockRect = block.getBoundingClientRect();
    window.scrollTo(window.pageXOffset, blockRect.bottom + window.innerHeight);
}
const ToFooterArrow = () => {
    return <div className="header-button-icon" onClick={ScrollToFooter}>
        <ArrowDownwardIcon />
    </div>
}

const Notify = (notify, toolkit) => {
    const [st, setst] = useState("Notify-block")
    return <div className={st} key={nanoid()}>
        <div className="Notify-headline">
            <div className="Notify-title">
                {notify.title}
            </div>
            <ClearIcon className="Notify-reset" onClick={() => {removeNotify(notify, toolkit, setst)}}/>
        </div>
        <div className="Notify-descr">
            {notify.descr}
        </div>
    </div>
}

function Notifications ({toolkit}) {
    return <div className="notifications">
        {toolkit.notify.map(item => Notify(item, toolkit))}
    </div>
}
function removeNotify(item, toolkit, st) {
    let array = toolkit.notify;
    st("Notify-block removed")
    toolkit.setNotify(array.filter(cell => cell !== item))

}

function MobileHeader ({headerMenu, toolkit, visible}) {
    const toggleMenu = () => {
        switch (headerMenu.headerMenuState) {
            case "vis": 
                headerMenu.setHeaderMenuState("invis"); 
                break;
            case "invis": 
                headerMenu.setHeaderMenuState("vis"); 
                break;
            default: break;
        }
    }
    return <div className="header mobile" id="header">
        <div className="header-container">
            <div className="header-button-icon" onClick={toggleMenu}>
                {headerMenu.headerMenuState === "vis" ? <ClearIcon /> : <MenuIcon />}
            </div>
            <Logo type="mobile"/>
            {toolkit.fcState && headerMenu.headerMenuState === "invis"? <ToFooterArrow /> : (<div className="header-button-icon"></div>)}
        </div>
        <div className={["header-visible", headerMenu.headerMenuState].join(" ")}>
            <div className="header-headline">
                {toolkit.appTitle}
            </div>
            {
                MenuList.map(item => <a href={item.href} key={nanoid()}>
                    <div className="header-visible-button">
                        {item.name}
                    </div>
                </a> 
                )
            }
        </div>
        <Notifications toolkit={toolkit}/>
    </div>
}
function WebHeader ({toolkit, visible}) {
    return <div className="header screen" id="header">
        <div className="header-container">
            <Logo type="screen" visible={visible}/>
            <div className="header-menu">
            {
                MenuList.map(item => <a href={item.href} target={item.target} key={nanoid()}>
                    <div className="header-menu-button">
                        {item.name}
                    </div>
                </a>)
            }
            </div>
            {toolkit.fcState ? <ToFooterArrow /> : (<div className="header-button-icon"></div>)}
        </div>
        <Notifications toolkit={toolkit}/>
    </div>
}
function Header({toolkit}) {
    let MobileDetect = require('mobile-detect');
    const [MobileUA, setMobileUA] = useState(new MobileDetect(window.navigator.userAgent).mobile());
    const [headerMenuState, setHeaderMenuState] = useState("invis");
    // eslint-disable-next-line
    const [visible, setVisible] = useState("visible");
    
    
    const headerMenu = {
        headerMenuState: headerMenuState, 
        setHeaderMenuState: setHeaderMenuState
    }
    // eslint-disable-next-line
    useEffect(() => {setMobileUA(new MobileDetect(window.navigator.userAgent).mobile())}, [MobileDetect, window.navigator.userAgent])
    const header = (
            <div>
                {MobileUA ? <MobileHeader headerMenu={headerMenu} toolkit={toolkit} visible={visible}/> : <WebHeader toolkit={toolkit} visible = {visible}/>}
                <div className="header-space"></div>
            </div>
        )
    if (toolkit.headerState) {
        window.addEventListener("scroll", () => {
            fixPos(document.getElementById("header"));
        })
        return header
    }
    else {
        return ""
    }
    

}

export default Header;
