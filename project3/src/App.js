import './assets/css/compo.css';
import {useState} from 'react';
import StudentTable from './components/StudentTable';
import './assets/css/compo.css'

function App() {
  const[fontSize,setfontSize]=useState();
   const small=()=>{
    setfontSize("16px");
   }
   const medium=()=>{
    setfontSize("20px")
   }
   const large=()=>{
    setfontSize("24px")
   }
  return (
    <div style={{fontSize}}>
      <h1>Student Information Portal</h1>
      <hr/>
      Font Size:
      <button onClick={small}>S</button>
      <button onClick={medium}>M</button>
      <button onClick={large}>L</button>
      <hr/>
      <div className='outerDiv'>
         <StudentTable/>

      </div>
      
    </div>
  );
}

export default App;
