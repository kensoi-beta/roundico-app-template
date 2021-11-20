import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import {useState} from 'react'
import {SearchPage} from './pages/Search'


function App() {
  const [headerState, setHeaderState] = useState(true);
  return (
    <div>
      <Header />
      <SearchPage headerState = {headerState} setHeaderState={setHeaderState} />
      <Footer />
    </div>
  );
}
export default App;
