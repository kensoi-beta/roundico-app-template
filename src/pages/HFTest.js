import {Tumblet} from '../components/tumblet/tumblet.js'

export const TumbletTest = ({toolkit}) => {
    toolkit.setHeaderState(false);
    toolkit.setFcState(false);
    const contexts = {
        left: {
            name: "ВЫКЛ",
            context: false
        },
        right: {
            name: "ВКЛ",
            context: true
        }
    }
    
    return <div className="app-layout">
        <div className="app-name">
            Пример приложения без готовых шапки и подвала
        </div>
        <div className="app-paragraph">
            Люблю пряники, очень сильно :3
        </div>
    </div>
    }