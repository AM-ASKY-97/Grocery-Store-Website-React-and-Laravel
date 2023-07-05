import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Banner from './component/Banner/Banner';
import Feature from './component/Feature/Feature';
import Products from './component/Products/Products';
import Categories from './component/Categories/Categories';
import Review from './component/Review/Review';
import Contact from './component/Contact/Contact';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Banner />
      <Feature />
      <Products />
      <Categories />
      <Review />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
