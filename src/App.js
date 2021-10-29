import React from 'react';
import './App.css';
import Header from './components/Header';
import Navig from './components/Navigation';
import { AsideOne,AsideTwo } from './components/Sidebar';
import Footer from './components/Footer';

function App(){
  return(
    <div>
      <Header />
      <Navig />
      <AsideOne />
      <AsideTwo />
      <Footer />
    </div>
  )
}
export default App;
