import React from 'react';
import Nav from './Nav';
import matematica from '../assets/img/person-researching-stem-concepts.png';
const Home = () => {
  return (
    <div className="bg-blue-400 w-screen h-screen">
      <Nav></Nav>
      <img src={matematica} alt="" />
      <h1>Calculo</h1>
    </div>
  );
};

export default Home;
