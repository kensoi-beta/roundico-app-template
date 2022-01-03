import './footer-stylesheet.css';

import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightIcon from '@mui/icons-material/Nightlight';
import { Icon } from './../RoundICO'

import { nanoid } from 'nanoid'
import { Tumblet } from '../tumblet/tumblet.js'

const ScrollToTop = () => {
    window.scrollTo(window.pageXOffset, 0);
}

const contexts = [
    {
        name: <LightModeIcon/>,
        context: "l",
        type: "svg"
    },
    {
        name: <NightlightIcon/>,
        context: "d",
        type: "svg"
    },
    {
        name: "AUTO",
        context: "a"
    }
]

function Logo({type}) {
    return <a href="https://www.dshdev.ru">
        <div className={["footer-logo", type].join(" ")}>
            <Icon />
            kensoi/dshdev
            {/* <div className="title">kensoi</div>
            <div className="page-status">dev</div> */}
        </div>
    </a>
}
function FooterRow(item) {
    if (item.isHeader) {
        return (
            <div className="footer-header" key = {nanoid()}>
                {item.title}
            </div>
        )
    }
    else {
        return (
            <a href={item.path.pathname} key = {nanoid()} target={item.target}>
                <div className="footer-link" key = {nanoid()}>
                    {item.title}
                </div>
            </a>
        )
    }
}

function FooterColumn(row) {
    return (
        <div className="footer-column" key = {nanoid()}>
            {row.map(item => FooterRow(item))}
        </div>
    )
}
function FooterHeader({toolkit}) {

    return <div className="footer-container fheader">
        <Logo type="screen"/>
        {
            toolkit.fcState ? <div className="footer-button-icon" onClick={ScrollToTop}>
                <ArrowUpwardIcon />
            </div> : ""    
        }
        
    </div>

}
function FooterFooter({toolkit}) {
    return <div className="footer-container ffooter" id="footer-container">
        <Tumblet tumbleConfig={contexts} context={toolkit.dm} setContext={toolkit.setDm}/>
    </div>
    
}

function Footer({toolkit}) {
    const footerTree = [
        [
            {
                isHeader: true,
                title: 'инструменты',
            },
            {
                isHeader: false,
                title: 'VKBotKit',
                path: {pathname: "https://www.dshdev.ru/vkbotkit/"},
                target: "_blank"
            },
            {
                isHeader: false,
                title: 'Libragram',
                path: {pathname: "https://www.dshdev.ru/libragram/"},
                target: "_blank"
            },
            {
                isHeader: false,
                title: 'Roundico App Template',
                path: {pathname: "https://www.dshdev.ru/roundico-app-template/"},
                target: "_blank"
            },
        ],
        
        [
            {
                isHeader: true,
                title: 'Приложения',
            },
            {
                isHeader: false,
                title: 'репозитории',
                path: {pathname: "https://www.dshdev.ru/repos/"},
                target: "_blank"
            },
            {
                isHeader: false,
                title: 'packages',
                path: {pathname: "https://www.dshdev.ru/packages/"},
                target: "_blank"
            },
        ],
        [
            {
                isHeader: true,
                title: 'Об авторе',
            },
            {
                isHeader: false,
                title: 'контакты',
                path: {pathname: "https://www.dshdev.ru/contacts/"},
                target: "_blank"
            },
            {
                isHeader: false,
                title: 'каналы',
                path: {pathname: "https://www.dshdev.ru/channels/"},
                target: "_blank"
            },
            {
                isHeader: false,
                title: 'ссылки',
                path: {pathname: "https://www.dshdev.ru/links/"},
                target: "_blank"
            },
        ],
    ]
    
    return (
        <div className="footer" id="footer">
            <FooterHeader toolkit = {toolkit}/>
            <div className="footer-wrapper">
                {
                    footerTree.map(column => FooterColumn(column))
                }
            </div>
            <FooterFooter toolkit = {toolkit}/>
        </div>
    );
}

export default Footer;
