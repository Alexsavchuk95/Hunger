import React from 'react';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import Slider from './components/Slider/Slider';
import Menu from './components/Menu/Menu';
import data from './components/Menu/Names';
import Ivents from './components/Ivents/Ivents';


const App = () => (
  <>
    <Header />
    <Form/>
    <Slider/>
    <Menu items={data}/>
    <Ivents/>
  </>
);

export default App;
