import React from 'react';
import GlobalStyles from '../../Style/GlobalStyles';
import MainContent from '../MainContent';
import NavBar from '../NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <MainContent />
      <GlobalStyles />
    </div>
  );
}

export default App;
