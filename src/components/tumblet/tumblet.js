import "./tumblet-stylesheet.css";
import {nanoid} from "nanoid";

function TumbletButton({item, context, setContext}) {
  return <div key = {nanoid()} className={context === item.context ? "tumblet-item" : "tumblet-item tumblet-selected"} onClick={() => {setContext(item.context)}}>
    {item.name}
  </div>
}
export function Tumblet({tumbleConfig, context, setContext}) {
    return <div className="tumblet"> 
      <div className="tumblet-wrapper">
        {
          tumbleConfig.map(item => TumbletButton({item, context, setContext}))
        }
      </div>
    </div>
  }