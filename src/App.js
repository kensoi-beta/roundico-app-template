import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import "./components/app.css"
import {useState} from 'react'
import {ExamplePage} from './pages/Example'


function App() {
  const [headerState, setHeaderState] = useState(true);
  const [fcState, setFcState] = useState(true);
  const toolkit = {
    headerState: headerState,
    setHeaderState: setHeaderState,
    fcState: fcState, 
    setFcState: setFcState
  }
  
  return (
    <div>
      <Header toolkit = {toolkit}/>
      <ExamplePage toolkit = {toolkit}/>
      <Footer toolkit = {toolkit}/>
    </div>
  );
}
export default App;
