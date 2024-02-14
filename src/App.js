import './App.css';
import './banana-cat.jpg';
import catgif from './cat.gif';
import React, { useEffect, useState } from 'react';

function App() {
  const [showText, setShowText] = useState(false);
  const [showGif, setShowGif] = useState(false);

  useEffect(() => {
    const button = document.getElementById('no-btn');
    if (button) {
      button.addEventListener('mouseover', function () {
        console.log('moused over');
        button.style.left = `${Math.ceil(Math.random() * 90)}%`;
        button.style.top = `${Math.ceil(Math.random() * 90)}%`;
      });
      button.addEventListener('click', function () {
          alert('you clicked me')
      })
    }
  }, []);

  const handleYesClick = () => {
    setShowText(true);
    setShowGif(true);
  }

  return (
    <section className='app-section'>
      <h1 className='app-header'>What's up smelly</h1>
      <div>
        {showGif ? (
          <img src={catgif} alt='catgif' />
        ) : (
          <img src='cat.jpg' alt='cat-with-hearts' />
        )}
      </div>
      <h1>Will you be my valentines? (Try to press no :D)</h1>
      <button type='submit' value={'yes'} className='yes-btn' onClick={handleYesClick}>Yes</button>
      <button type='submit' value={'no'} id='no-btn'>No</button>
       {showText && <p>WAHOO! I'm glad you made the right choice. Sorry we can't see eachother 
        to celebrate and I can't afford to do anything big but soon we'll see eachother every day and
        we'll be rich! :3</p>}
    </section>
  );
  
}

export default App;
