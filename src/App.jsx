import { useState } from 'react';


function App() {

  const [count, setCount] = useState(0);


  return (
    <div >
      <p className='text-4x1'>
        SOME TEXT
      </p>
      <button onClick={() => {
        setCount((count) => count + 1)
      }}
      className='bg-blue-500 hover:bg-red-900 p-4 rounded-xl text-2xl'>THIS BE A BUTTON {count}
      </button>
    </div>
  );
}

export default App
