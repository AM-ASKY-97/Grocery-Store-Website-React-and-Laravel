import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Banner from './component/Banner/Banner';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Banner />
    </div>
  );
}

export default App;
