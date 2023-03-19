import React from 'react';

import Header from './components/Header';
import Gallery from './components/Gallery';
import './app.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="main">
        <Gallery />
      </div>
    </div>
  );
}

export default App;
