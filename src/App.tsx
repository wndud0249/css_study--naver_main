import React from 'react';
import './styles/scss/main.scss';
import './styles/scss/common.scss';
import HeaderComponent from './components/Header/HeaderComponent';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <main></main>
      <footer></footer>
    </div>
  );
}

export default App;
