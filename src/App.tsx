import React, {useState} from 'react';
import './App.css';
import {ButtonInc} from './ButtonInc';
import {ButtonReset} from './ButtonReset';
import {Display} from "./Display";


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
            <Display number={display}/>
            <ButtonInc addDisplay={addDisplay}/>
            <ButtonReset resetDisplay={resetDisplay}/>
        </div>
    )
}

export default App;
