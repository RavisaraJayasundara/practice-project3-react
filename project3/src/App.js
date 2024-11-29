import {useState} from 'react';

function App() {
   const[fontSize,setFontSize]=useState(16);

  const small=()=>{
    setFontSize("16px")
  }
  const medium=()=>{
    setFontSize("20px")
  }
  const large=()=>{
    setFontSize("24px")
  }
  return (
    <div style={{fontSize}}>
      <h1 style={{textAlign:'center'}}>Student Information Portal</h1>
      <hr/>
      Font size:
      <button onClick={small}>S</button>
      <button onClick={medium}>M</button>
      <button onClick={large}>L</button>
       <hr/>
    </div>
  );
}

export default App;
