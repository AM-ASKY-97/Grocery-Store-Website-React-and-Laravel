import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Banner from './component/Banner/Banner';
import Feature from './component/Feature/Feature';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Banner />
      <Feature />
    </div>
  );
}

export default App;
