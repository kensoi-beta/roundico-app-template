import './footer-stylesheet.css';
import RoundICO from './../../img/roundico.svg';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { nanoid } from 'nanoid'

const ScrollToTop = () => {
    window.scrollTo(window.pageXOffset, 0);
}
function Logo({type}) {
    return <div className={["footer-top-logo", type].join(" ")}>
        <img src={RoundICO} alt="RoundICO"/>
        {/* <div className="title">kensoi</div>
        <div className="page-status">dev</div> */}
    </div>
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

function FooterContainer() {
    return <div className="footer-container" id="footer-container">
        <Logo type="screen"/>
        <div className="footer-container-middle">
            dshdev
        </div>
        <div className="footer-button-icon" onClick={ScrollToTop}>
            <ArrowUpwardIcon />
        </div>
    </div>
}

function Footer({toolkit}) {
    const footerTree = [
        [
            {
                isHeader: true,
                title: 'Проекты',
            },
            {
                isHeader: false,
                title: 'VKBotKit',
                path: {pathname: "https://dshdev.ru/vkbotkit/"},
                target: "_blank"
            },
            {
                isHeader: false,
                title: 'Libragram',
                path: {pathname: "https://dshdev.ru/libragram/"},
                target: "_blank"
            },
        ],
        [
            {
                isHeader: true,
                title: 'Каналы',
            },
            {
                isHeader: false,
                title: 'Kensoi Dev',
                path: {pathname: "https://t.me/kensoi"},
                target: "_blank"
            },
            {
                isHeader: false,
                title: 'Libragram Dev',
                path: {pathname: "https://t.me/libragramdev"},
                target: "_blank"
            },
        ],
        [
            {
                isHeader: true,
                title: 'Страницы',
            },
            {
                isHeader: false,
                title: 'Контакты',
                path: {pathname: "https://www.dshdev.ru/contact/"},
                target: "_self"
            },
            {
                isHeader: false,
                title: 'Репозитории',
                path: {pathname: "https://www.dshdev.ru/repos"},
                target: "_self"
            },
        ],
    ]
    return (
        <div className="footer" id="footer">
            {toolkit.fcState ? <FooterContainer /> : (<div></div>)}
            <div className="footer-wrapper">
                {
                    footerTree.map(column => FooterColumn(column))
                }
            </div>
        </div>
    );
}

export default Footer;
