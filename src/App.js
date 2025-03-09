import logo from './logo.svg';
import React, {useState} from 'react'
import './App.css';

function App() {
  const[value, setValue] = useState('');
  return (
    <div className="background">
      <div className=" calculator">
        <form>
          <div className="display">
            <input type="text" value={value}/>
            
          </div>
          <div className="buttons">
            <div className="number">
            <input type="button" value="1" onClick={e => setValue(value + e.target.value)}/>
            <input type="button" value="2" onClick={e => setValue(value + e.target.value)}/>
            <input type="button" value="3" onClick={e => setValue(value + e.target.value)}/>
            <input type="button" value="4" onClick={e => setValue(value + e.target.value)}/>
            <input type="button" value="5" onClick={e => setValue(value + e.target.value)}/>
            <input type="button" value="6" onClick={e => setValue(value + e.target.value)}/>
            <input type="button" value="7" onClick={e => setValue(value + e.target.value)}/>
            <input type="button" value="8" onClick={e => setValue(value + e.target.value)}/>
            <input type="button" value="9" onClick={e => setValue(value + e.target.value)}/>
            <input type="button" value="AC" onClick={e => setValue('')}/>
            <input type="button" value="0" onClick={e => setValue(value + e.target.value)}/>
            <input type="button" value="DE" onClick={e => setValue(value.slice(0, -1))}/>
            </div>
            <div className="functions">
            <input type="button" value="+" onClick={e => setValue(value + e.target.value)}/>
            <input type="button" value="-" onClick={e => setValue(value + e.target.value)}/>
            <input type="button" value="/" onClick={e => setValue(value + e.target.value)}/>
            <input type="button" value="*" onClick={e => setValue(value + e.target.value)}/>
            <input type="button" value="." onClick={e => setValue(value + e.target.value)}/>
            <input type="button" value="=" onClick={e => setValue(eval(value))} />



            </div>
            

          </div> 
        </form>

      </div>
    </div>
  );
}

export default App;
