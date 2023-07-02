import React from 'react';
import { Chat } from '../components/ChatArea';
import './MainPage.css';
interface MainPageProps {
  children?: React.ReactElement;
}

const MainPage = (props: MainPageProps) => {
  return (
    <div className="main">
      <div className="main-child-common">
        <Chat />
      </div>
    </div>
  );
};

export default MainPage;
