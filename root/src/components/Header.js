import React from 'react';
import '../Style.css';

function Header() {
  return (
    <header>
      <figure>
        <img
          srcSet="
      https://picsum.photos/200,
      https://picsum.photos/300 1.5x,
      https://picsum.photos/400 2x,
      https://picsum.photos/600 3x
    "
          srcSet="https://picsum.photos/600"
          alt="Lorem Picsum"
        />
      </figure>
      <h1 className="header">Nicholas P La Chance React App</h1>
    </header>
  );
}

export default Header;
