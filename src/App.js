import React,{ useState } from 'react';

function App() {
  const[backgroundColor, setBackgroundColor] = useState('plum');
  return (
    <>
      <div style={{ display:'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center',color:'#eee',  backgroundColor: backgroundColor}}
        onMouseEnter={() => setBackgroundColor('pink')}
        onMouseLeave={() => setBackgroundColor('plum')} >
        <h2> Change the Background here!!</h2> 
      </div>
   </>
  
  );
}

export default App;
