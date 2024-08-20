// src/assets/CursorFollower.js
import React, { useEffect, useState } from 'react';
import Qa1 from '../../src/assets/images/qa.png';
import './CursorFollower.css';

const CursorFollower = () => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const maxX = window.innerWidth - 10; // Restrict right side to 10px from the edge
      const maxY = window.innerHeight; // You can add similar restriction to the Y axis if needed

      setMouseX(Math.min(e.pageX, maxX));
      setMouseY(e.pageY); // No restriction on Y axis unless needed
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <img
            className="cursorFollowerImage sm:invisible"
            src={Qa1}
            style={{ left: `${mouseX}px`,
        top: `${mouseY}px` }}
            alt="header"
          ></img>
  );
};

export default CursorFollower;

