import './../css/Footer.css';
import Logo from './../img/roundico.svg';
import { nanoid } from 'nanoid'

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

function Footer() {
    const footerTree = [
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
                path: {pathname: "https://www.kensoi.ru/contact/"},
                target: "_self"
            },
            {
                isHeader: false,
                title: 'Репозитории',
                path: {pathname: "https://www.kensoi.ru/repos"},
                target: "_self"
            },
        ],
    ]
    return (
        <div className="footer-container" id="footer">
            <div className="footer-wrapper">
                <div className="footer-logo">
                    <div className='footer-contain footer-flex' onClick={() => {window.location.href = "https://www.kensoi.ru"}}>
                        <img src={Logo} alt="RoundICO" />
                        <div className="title">kensoi</div>
                        <div className="page-status">dev</div>
                    </div>
                    {/* <div className='footer-contain'>
                        <p>
                            kensoi.ru
                            </p>
                        <p>
                            admin@kensoi.ru
                            </p>
                    </div> */}
                </div>
                <div className="footer-space">
                </div>
                {
                    footerTree.map(column => FooterColumn(column))
                }
            </div>
        </div>
    );
}

export default Footer;
