import Logo from '../img/roundico.svg'


const NotFound = ({headerState, setHeaderState}) => {
    setHeaderState(true);
    return <div className="app-layout">
        <img src={Logo} className="app-icon" alt="RoundICO"/>
        <div className="app-name">
            Ой, вупс!
        </div>
        <div className="app-paragraph">
            Вы забрели куда-то не туда. Попробуйте поискать нужную информацию <br /> <a href="https://dshdev.ru/pages/">на этой странице</a>?
        </div>
    </div>
  }


export default NotFound;