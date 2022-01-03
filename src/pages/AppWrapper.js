import {TumbletTest} from "./TumbletTest"
import {NotifyTest} from "./NotifyTest"
import {ExamplePage} from "./Example"
import {NotFound} from "./NotFound"
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";

/* 
Note about gh-pages module
If you want to make react-router-dom working on deployed page at Github Pages, you need to make copy of "index.html" and rename it to "404.html".

*/

function AppWrapper ({toolkit}) {
    toolkit.setAppTitle("Roundico-Test-App");
    
    return <BrowserRouter>
    <Routes>
      <Route path="/roundico-app-template/*" element={<NotFound toolkit = {toolkit}/>} />
      <Route exact path="/roundico-app-template/" element={<ExamplePage toolkit = {toolkit}/>} />
      <Route exact path="/roundico-app-template/tumblet/" element={<TumbletTest toolkit = {toolkit}/>} />
      <Route exact path="/roundico-app-template/note-test/" element={<NotifyTest toolkit = {toolkit}/>} />
    </Routes>
  </BrowserRouter>
}
export default AppWrapper;