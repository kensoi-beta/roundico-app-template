import "./tumblet-stylesheet.css";

// {
//     left: {
//         name: "test-1",
//         context: "1"
//     },
//     right: {
//         name: "test-2",
//         context: "2"
//     }
// }

export function Tumblet({tumbleConfig, context, setContext}) {
    return <div className="tumblet"> 
      <div className="tumblet-wrapper">
        <div className={context === tumbleConfig.left.context ? "tumblet-item" : "tumblet-item tumblet-selected"} onClick={() => {setContext(tumbleConfig.left.context)}}>
            {tumbleConfig.left.name}
        </div>
        <div className={context === tumbleConfig.right.context? "tumblet-item" : "tumblet-item tumblet-selected"}  onClick={() => {setContext(tumbleConfig.right.context)}}>
            {tumbleConfig.right.name}
        </div>
      </div>
    </div>
  }