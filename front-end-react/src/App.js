import logo from './logo.svg';
import './App.css';

import { useEffect, useState } from 'react';
import LoadingPage from './component/LoadingPage/LoadingPage';
import { Route, Routes } from 'react-router-dom';
import MainPage from './component/MainSections/MainPage';

import LoginMain from './component/Router/Login/LoginMain/LoginMain';

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

              <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/new-user" element={<LoginMain />} />
              </Routes>

            </>
          )
        }
      </div>
    </>
  );
}

export default App;
