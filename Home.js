import React, { useState } from 'react';

const HomePage = () => {
  const [themeColor, setThemeColor] = useState('blue');

  const changeThemeColor = (color) => {
    setThemeColor(color);
  };

  return (
    <div style={{ backgroundColor: themeColor, minHeight: '100vh', padding: '20px' }}>
      <h1>Welcome to our Website</h1>
      <nav>
        <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'center', padding: 0 }}>
          <li style={{ margin: '0 10px' }}><button onClick={() => changeThemeColor('pink')}>Home</button></li>
          <li style={{ margin: '0 10px' }}><button onClick={() => changeThemeColor('green')}>About Us</button></li>
          <li style={{ margin: '0 10px' }}><button onClick={() => changeThemeColor(' blue')}>Contact Us</button></li>
        </ul>
      </nav>
      <div style={{ marginTop: '20px' }}>
        <label htmlFor="theme-color">Change Theme Color:</label>
        <select id="theme-color" onChange={(e) => changeThemeColor(e.target.value)}>
          <option value="pink">light pink</option>
          <option value="green">Green</option>
          <option value=" blue">light blue</option>
        </select>
      </div>
    </div> 
  );
};

export default HomePage;