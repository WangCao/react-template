import React from 'react';
import img from 'Images/userImage.png';
import { add, minus } from 'Utils/math';

function App() {
  return (
    <div>
      <h1>xixia{add(2, 4)}</h1>
      <img src={img} alt='' />;
    </div>
  );
}

export default App;
