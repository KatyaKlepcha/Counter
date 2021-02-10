import React, {useState} from 'react';
import './App.css';
import {ButtonInc} from './Components/Buttons/ButtonInc';
import {ButtonReset} from './Components/Buttons/ButtonReset';
import {ButtonSet} from './Components/Buttons/ButtonSet';
import {Display} from "./Components/Display/Display";
import {Settings} from './Components/Settings/Settings';


function App() {
    const [display, setDisplay] = useState(0);
    const addDisplay = () => {
        if (display < 5) {
            setDisplay(display + 1)
        }
    }
    const resetDisplay = () => setDisplay(0)


    return (
        <div className={'main'}>
            <div className={'set-wrapper'}>
                <div className={'settingsDisplay'}>
                    <Settings/>
                </div>
                <div className={'buttons'}>
                    <ButtonSet/>
                </div>
            </div>
            <div className={'wrapper'}>
                <div className={'display'}>
                    <Display number={display}/>
                </div>
                <div className={'buttons'}>
                    <ButtonInc addDisplay={addDisplay} disabled={display === 5}/>
                    <ButtonReset resetDisplay={resetDisplay}/>
                </div>
            </div>
        </div>
    )
}

export default App;
