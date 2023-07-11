import logo from './logo.svg';
import './App.css';

import { useEffect, useState } from 'react';
import LoadingPage from './component/LoadingPage/LoadingPage';
import { Route, Routes } from 'react-router-dom';
import MainPage from './component/MainSections/MainPage';
import Products from './component/Router/Products/Products';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';

function App() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 5000);
  }, [])

  return (
    <>
      <div className="App">
        {
          loading ? (
            <LoadingPage />
          ) : (
            <>
              <Header />
              <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path='/products' element={<Products />} />
              </Routes>
              <Footer />
            </>
          )
        }
      </div>
    </>
  );
}

export default App;
