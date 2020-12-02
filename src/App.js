import React, {useState} from 'react'
const { default: Button } = require("./Button");


function App() {
  const [state, setstate] = useState({
    result:'',
    value:''
  })
  const callback = (value, result)=>{
     
  }
 
  return (
    <div className="App">
     <div className='display'>
       <div className='value'>600+700</div>
       <div className='result'>1200</div>
     </div>
     <Button/>
    </div>
  );
}

export default App;
