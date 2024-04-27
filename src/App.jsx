import { useState } from 'react'
import './App.css'



function App() {

  const [inputValue,setInputValue] = useState("0")
  const [error, setError] = useState(null);

  const handleClear=()=>{
    setInputValue("0");
    setError(null);
  }

  const displayContent = (content) => {
    if (inputValue === "0" || error) {
      setInputValue(content);
      setError(null);
    } else {
      setInputValue(oldValue => oldValue + content);
    }
  }

  const handleEqual = () => {
    try {
      const result = eval(inputValue);
      setInputValue(result.toString());
      setError(null);
    } catch (error) {
      setInputValue('');
      setError('Error');
    }
  }


  const handleRemoveLast=()=>{
    setInputValue(oldValue => oldValue.slice(0, -1) || '0');
    setError(null);
  }  



  return (
    <div className='bg-dark d-flex justify-content-center align-items-center' style={{minHeight:'100vh',width:'100%'}}>
      <div >
        <div style={{width:'400px'}} className='bg-warning p-5 rounded box-shadow-'>
          <input  type="text" className='form-control input-value' placeholder={error || 0} value={inputValue}  readOnly /> <br />
          
          {/* cal button */}
          <button onClick={handleClear} className='one fw-bolder text-danger'> AC  </button>
          <button onClick={()=>displayContent('()')} className='two fw-bolder text-success'> () </button>
          <button onClick={()=>displayContent('%')} className='three fw-bolder text-success'> % </button>
          <button onClick={()=>displayContent('/')} className='four fw-bolder text-success'> / </button>
          <br /> 
          <button onClick={()=>displayContent('7')} className='one fw-bolder bg-light'> 7 </button>
          <button onClick={()=>displayContent('8')} className='two fw-bolder bg-light'> 8 </button>
          <button onClick={()=>displayContent('9')} className='three fw-bolder bg-light'> 9 </button>
          <button onClick={()=>displayContent('*')} className='four fw-bolder text-success'> x </button>
          <br /> 
          <button onClick={()=>displayContent('4')} className='one fw-bolder bg-light'> 4 </button>
          <button onClick={()=>displayContent('5')} className='two fw-bolder bg-light'> 5 </button>
          <button onClick={()=>displayContent('6')} className='three fw-bolder bg-light'> 6 </button>
          <button onClick={()=>displayContent('-')} className='four fw-bolder text-success'> - </button>
          <br /> 
          <button onClick={()=>displayContent('3')} className='one fw-bolder bg-light'> 3 </button>
          <button onClick={()=>displayContent('2')} className='two fw-bolder bg-light'> 2 </button>
          <button onClick={()=>displayContent('1')} className='three fw-bolder bg-light'> 1 </button>
          <button onClick={()=>displayContent('+')} className='four fw-bolder text-success'> + </button>
          <br />
          <button onClick={handleRemoveLast} className='one fw-bolder bg-light'> <i className='fa-solid fa-delete-left'></i> </button>
          <button onClick={()=>displayContent('0')} className='two fw-bolder bg-light'> 0 </button>
          <button onClick={()=>displayContent('.')} className='three fw-bolder bg-light'> . </button>
          <button onClick={handleEqual}  className='four fw-bolder text-light bg-success'> = </button>
        </div>
      </div>     
    </div>
  )
}

export default App
