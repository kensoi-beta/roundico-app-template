import "./tumblet-stylesheet.css";

// {
//     left: {
//         name: "test-1",
//         context: "1"
//     },
//     center: {
//         name: "test-2",
//         context: "2"
//     }
//     right: {
//         name: "test-2",
//         context: "2"
//     }
// }
function TumbletButton({item, context, setContext}) {
  return <div className={context === item.context ? "tumblet-item" : "tumblet-item tumblet-selected"} onClick={() => {setContext(item.context)}}>
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