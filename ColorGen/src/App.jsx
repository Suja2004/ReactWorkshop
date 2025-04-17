import React, { useState } from 'react';
import copy from './assets/copy.png';
import './App.css';

const App = () => {
  const [color, setColor] = useState('#33ccff');
  const [copied, setCopied] = useState(false);
  const [hovered, setHovered] = useState(false);

  // Generate
  const generateRandomColor = () => {
    const hex = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    setColor(hex);
  };

  // Copy
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(color);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div className="wrapper">
      <div className="mouse-pointer-tracker"></div>
      <div className="mouse-pointer-tracker"></div>
      <div className="mouse-pointer-tracker"></div>
      <div className="mouse-pointer-tracker"></div>
      <div className="mouse-pointer-tracker"></div>
      <div className="mouse-pointer-tracker"></div>
      <div className="mouse-pointer-tracker"></div>
      <div className="mouse-pointer-tracker"></div>
      <div className="mouse-pointer-tracker"></div>

      <div className='container' style={{ boxShadow: `0 0 15px ${color}` }}>
        <h2 style={{ textShadow: `0 0 15px ${color}` }}>Dynamic Color Generator</h2>

        <div className='banner' style={{ backgroundColor: `${color}` }} />

        <button onClick={generateRandomColor}
          style={{ backgroundColor: hovered ? `${color}` : 'transparent' }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          Generate
        </button>
        <div className='copy'>
          <p>{color}</p>
          <button onClick={copyToClipboard}  >
            <img src={copy} alt="copy" />
          </button>
        </div>

        {copied && <p className='popup'>Copied to Clipboard!</p>}
      </div >
    </div>
  );
};

export default App;
