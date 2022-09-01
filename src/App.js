import logo from './logo.svg';
import './App.css';
import Header from './components/common/Header';
import Heading from './components/main/Home_page/Heading';
import Step from './components/main/Home_page/Step/Step';

function App() {
  return (
    <div className="App">
      <Header/>
      <Heading/>
      <Step/>
    </div>
  );
}

export default App;
