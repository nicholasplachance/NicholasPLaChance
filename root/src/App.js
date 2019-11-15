import React from 'react';
import './App.css';
import './Style.css'
import Header from "./components/Header.js"
import Navigation from "./components/Navigation"
import Main from "./components/Main"
import Footer from "./components/Footer"

function App() {

  return (
    <React.Fragment>
      < Header / >
      < Navigation / >
      < Main / >
      < Footer / >
    </React.Fragment>
  );
}

export default App;
