import logo from './logo.svg';
import './App.css';

import { useEffect, useState } from 'react';
import LoadingPage from './component/LoadingPage/LoadingPage';
import { Route, Routes } from 'react-router-dom';
import MainPage from './component/MainSections/MainPage';

import NewAccount from './component/Router/Login/NewAccount';

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
                <Route path="/new-user" element={<NewAccount />} />
              </Routes>

            </>
          )
        }
      </div>
    </>
  );
}

export default App;
