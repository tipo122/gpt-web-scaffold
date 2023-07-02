import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import MainPage from './pages/MainPage';
import './App.css';

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#F09A37',
          colorBgContainer: '#282c34',
          colorText: '#fff',
        },
      }}
    >
      <Router>
        <div className="App">
          <header className="App-header">
            <Routes>
              <Route path="/" element={<MainPage />} />
            </Routes>
          </header>
        </div>
      </Router>
    </ConfigProvider>
  );
}

export default App;
