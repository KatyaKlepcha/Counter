import React, {useState} from 'react';
import './App.css';
import {ButtonInc} from './Components/Buttons/ButtonInc';
import {ButtonReset} from './Components/Buttons/ButtonReset';
import {Display} from "./Components/Display/Display";


function App() {
    const [display, setDisplay] = useState(0);
    const addDisplay = () => {
        if (display < 5) {
            setDisplay(display + 1)
        }
    }
    const resetDisplay = () => setDisplay(0)


    return (
        <div>
            <div>Hello!!!</div>
            <Display number={display}/>
            <ButtonInc addDisplay={addDisplay}/>
            <ButtonReset resetDisplay={resetDisplay}/>
        </div>
    )
}

export default App;
