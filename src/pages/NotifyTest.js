import "../components/adaptive/adaptive.css";
import {useState} from "react";


function NotifyCreate({toolkit}) {
    const [NotifyName, setNotifyName] = useState("Notification Title");
    const [NotifyDescr, setNotifyDescr] = useState("Do not remember to finish these notes!");

    return <div> 
        <div>
            <textarea  placeholder="Заголовок" onChange = {(event) => {setNotifyName(event.target.value)}}></textarea>
        </div>
        <div>
            <textarea  placeholder="Описание" onChange = {(event) => {setNotifyDescr(event.target.value)}}></textarea>
        </div>
        <button onClick={() => {
            let item = {title: NotifyName, descr: NotifyDescr};
            toolkit.setNotify([item])
        }}>
            Добавить
        </button>
    </div>
}


export const NotifyTest = ({toolkit}) => {
  return <div className="app-layout">
      <div className="app-name">
        Notify addon
      </div>
      <div className="adaptive-block two-block">
        <div className="adaptive-block-item centering">
            <NotifyCreate toolkit={toolkit}/>
        </div>
        <div className="adaptive-block-item x-centering">
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            
        </div>
    </div>
    <div className="app-paragraph">
        <center>
          <b>
            Попробуйте также изменить страницу в app.js
          </b>
        </center>
    </div>
  </div>
}