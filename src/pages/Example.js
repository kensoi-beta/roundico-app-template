import Tomato from '../img/tomato.png'
import "../components/adaptive/adaptive.css";
export const ExamplePage = ({toolkit}) => {
  return <div className="app-layout">
      <div className="app-name">
        Ваше первое приложение
      </div>
      <div className="adaptive-block two-block">
        <div className="adaptive-block-item centering">
            <img src={Tomato} width = "192px" alt="tomato"/>
        </div>
        <div className="adaptive-block-item x-centering">
            <p>
              Привет! Эта страница была создана при помощи шаблона RoundICO App Template. 
            </p>
            <p>
              Попробуйте посетить так же следующие страницы: <a href="./roundico-app-template/tumblet"> тумблеты, </a><a href="./roundico-app-template/note-test"> уведомления, </a>
            </p>
        </div>
    </div>
    <div className="app-paragraph">
        <center>
          <b>
            Попробуйте также изменить страницу в AppWrapper.js
          </b>
        </center>
    </div>
  </div>
}