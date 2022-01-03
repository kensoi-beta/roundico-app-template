import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import {useEffect, useState} from 'react'
import AppWrapper from './pages/AppWrapper';


function App () {
  const [headerState, setHeaderState] = useState(true);
  const [appTitle, setAppTitle] = useState("roundico-test-app");
  const [fcState, setFcState] = useState(true);
  const [notify, setNotify] = useState([]);
  let dmStartValue = localStorage.getItem("colormode");

  const [dm, setDm] = useState(dmStartValue == null ? "a" : dmStartValue); // "a" is auto; "l" is light; "d" is dark

  useEffect(
  () => {
      localStorage.setItem("colormode", dm);
      switch(dm) {
        case "l": 
          document.body.classList.add("light");
          document.body.classList.remove("dark");
          document.body.classList.remove("auto");
          break;

      case "d": 
          document.body.classList.remove("light");
          document.body.classList.add("dark");
          document.body.classList.remove("auto");
          break;

      default: 
          document.body.classList.remove("light");
          document.body.classList.remove("dark");
          document.body.classList.add("auto");
          break;
  }}, [dm])

  const toolkit = {
      headerState: headerState, setHeaderState: setHeaderState,
      fcState: fcState, setFcState: setFcState,
      dm: dm, setDm: setDm,
      notify: notify, setNotify: setNotify,
      appTitle: appTitle, setAppTitle: setAppTitle
  }

  return (
    <div>
      <Header toolkit = {toolkit}/>
      <AppWrapper toolkit = {toolkit}/>
      <Footer toolkit = {toolkit}/>
    </div>
  )
}

export default App;