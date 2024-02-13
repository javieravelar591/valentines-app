import './App.css';
import React from 'react';

function App() {
  // const [showImage, setShowImage] = useState(false);

  // const handleMouseOver = () => {
  //   setShowImage(true);
  // }
  // const handleMouseOut = () => {
  //   setShowImage(false);
  // }
  const button = document.getElementById('no-btn');
  button.addEventListener('mouseover', function () {
    console.log('moused over');
    button.style.left = `${Math.ceil(Math.random() * 90)}%`;
    button.style.top = `${Math.ceil(Math.random() * 90)}%`;
  });
  button.addEventListener('click', function () {
      alert('you clicked me')
  })
  return (
    <section className='app-section'>
      <h1 className='app-header'>What's up stinky</h1>
      <h1>Will you be my valentines :D</h1>
      <button type='submit' value={'yes'} className='yes-btn'>Yes</button>
      <button type='submit' value={'no'} id='no-btn'>No</button>
       {/* {showImage && (<img src='valentines-app/public/banana-cat.jpg' alt='banana-cat'/>)} */}
    </section>
  );
  
}

export default App;
