import Header from './components/Header'
import Footer from './components/Footer'
import {useState} from 'react'
import {ExamplePage} from './pages/Example'


function App() {
  const [headerState, setHeaderState] = useState(true);
  return (
    <div>
      <Header />
      <ExamplePage headerState = {headerState} setHeaderState={setHeaderState} />
      <Footer />
    </div>
  );
}
export default App;
