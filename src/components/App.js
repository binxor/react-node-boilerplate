import React, { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      Just a skeleton project for a React-Node-Express web app.  Implement your app faster by starting with the basic libraries and project structure already in place.
      <br />
      <br />
      Click the button to see statefullness in action:  
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  );
}