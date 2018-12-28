import React from 'react';
// import logo from './favicon/favicon-32x32.png'; // Tell Webpack this JS file uses this image

function Header() {
  // Import result is the URL of your image
  return <div><img src={ process.env.PUBLIC_URL+'/favicon/favicon-32x32.png' } alt="Logo" /></div>;
}

export default Header;