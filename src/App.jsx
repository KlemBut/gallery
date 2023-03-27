import React, {createContext, useState} from 'react';

export const UserContext = createContext();

import Header from './components/Header';
import Gallery from './components/Gallery';
import Modal from './components/Modal';
import './app.scss';

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const value = {
    isModalVisible,
    setIsModalVisible
  }

  return (
    <UserContext.Provider value={value}>
    <div className="app">
      <Header />
      <div className="main">
      <Modal />
        <Gallery />
      </div>
    </div>
    </UserContext.Provider>
  );
}

export default App;
