import React from 'react';
import Buscador from '../components/Buscador';
import Main from '../components/Main';
import Navbar from '../components/Navbar';
import ListMealsMainPage from './ListMealsMainPage';


const App = () => {
  return (
    <Main>
      <Navbar/>
      <Buscador/>
      <ListMealsMainPage/>
    </Main>
  );
};

export default App;
