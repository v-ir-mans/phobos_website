import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import CoolButton from './CoolButton';

const TopMenu = ({routesDict}) => {

  const location = useLocation(); // Get the current location

  const handleButtonClick = (page) => {
    console.log(`Navigating to ${page}`);
  };

  const emojis = ["😀", "😂", "😍", "😎", "😜", "🥺", "😇"];
  const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];

  return (
    <nav className="p-2 flex justify-center items-center ">
      <div className="pl-4 flex space-x-4 border bg-black border-zinc-700 p-2 rounded-2xl items-center justify-center">
        <Link to="/"><h1 className="text-3xl font-bold">Foboss</h1></Link>
        
        <h1 className="text-3xl font-bold ">{randomEmoji}</h1>

                {routesDict.map(route => (
                  <Link key={route.path} to={route.path}>
                    <CoolButton
                      label={route.label}
                      onClick={() => {}}
                      isSelected={location.pathname === route.path}
                    />
                  </Link>
                ))}


      </div>
    </nav>
  );
};

export default TopMenu;
