import React from 'react';
import { useNavigate } from 'react-router-dom';
const Nav = () => {
  const navigate = useNavigate();
  return (
    <div className="flex w-full justify-around bg-white p-5 font-bold uppercase text-2xl opacity-90 ">
      <button onClick={() => navigate('/')}>Inicio</button>
      <button onClick={() => navigate('/temario')}>Temario</button>
      <button onClick={() => navigate('/contact')}>Contacto</button>
    </div>
  );
};

export default Nav;
