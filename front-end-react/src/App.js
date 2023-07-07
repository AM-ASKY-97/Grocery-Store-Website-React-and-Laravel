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

import { useEffect, useState } from 'react';
import LoadingPage from './component/LoadingPage/LoadingPage';

function App() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 8000);
  }, [])

  return (
    <>
      <div className="App">
        {
          loading ? (
            <LoadingPage />
          ) : (
            <>
              <Header/>
              <Home />
              <Banner />
              <Feature />
              <Products />
              <Categories/>
              <Review />
              <Contact />
              <Footer />
            </>
          )
        }
      </div>
    </>
  );
}

export default App;
