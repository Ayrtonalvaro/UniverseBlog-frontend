import React from 'react'
import banner from '../../assets/Banner.jpg'
import './Header.css'

const Header = () => {
  return (
    <div className="headerSection h-96">
      <h1 className="text-white text-4xl font-roboto  text-center uppercase pt-20">
        Blog Universe
      </h1>
      <p className="text-white font-roboto text-center text-3xl p-20 flex justify-center ">
        Welcome to the blog in which we are going to talk about the universe and
        all its curiosities.
      </p>
    </div>
  );
}

export default Header
