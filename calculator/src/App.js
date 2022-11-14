import React, { useState } from 'react';
import './App.css';

const App = () => {
    const [result, setResult] = useState("");

    const handleClick = (e) => {
          setResult(result.concat(e.target.name));
    }
    const clear = () => {
          setResult("");
    }
    const backspace = () => {
        setResult(result.slice(0, -1));
    }
    const calculate = () => {
        try {
            setResult(eval(result).toString());
        }catch(err){
            setResult("Error")
    }
}
        return (
            <>
            <div className="outer-shadow head">
            <h4>CALCULATOR</h4>
            </div>
             <div className="outer shadow container">
                <form>
                    <input type="text" value={result}/>
                </form>
                <div className='keypad'>
                    <button className='outer-shadow highlight' onClick={clear} id="clear">Clear</button>
                    <button className=' outer-shadow highlight' onClick={backspace} id="backspace">C</button>
                    <button className='outer-shadow highlight' name="/" onClick={handleClick}>&divide;</button>
                    <button className='outer-shadow' name="7" onClick={handleClick}>7</button>
                    <button  className='outer-shadow'  name="8" onClick={handleClick}>8</button>
                    <button  className='outer-shadow'  name="9" onClick={handleClick}>9</button>
                    <button className='outer-shadow highlight' name="*" onClick={handleClick}>&times;</button>
                    <button  className='outer-shadow'  name="4" onClick={handleClick}>4</button>
                    <button  className='outer-shadow' name="5" onClick={handleClick}>5</button>
                    <button  className='outer-shadow'  name="6" onClick={handleClick}>6</button>
                    <button className='outer-shadow highlight' name="-" onClick={handleClick}>&ndash;</button>
                    <button  className='outer-shadow' name="1" onClick={handleClick}>1</button>
                    <button  className='outer-shadow' name="2" onClick={handleClick}>2</button>
                    <button  className='outer-shadow' name="3" onClick={handleClick}>3</button>
                    <button className='outer-shadow highlight' name="+" onClick={handleClick}>+</button>
                    <button  className='outer-shadow' name="0" onClick={handleClick}>0</button>
                    <button  className='outer-shadow' name="." onClick={handleClick}>.</button>
                    <button className='outer-shadow highlight' onClick={calculate} id="result">=</button>
                </div>
             </div>
            </>
        );
    }

export default App;
