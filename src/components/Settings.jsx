import { useState } from "react";

export default function Settings(props){
    const {setCount, 
        startingValue, 
        setStartingValue,
        changeValue,
        setChangeValue} = props;


    const [isOpen, setIsOpen] = useState(false);

    const handleInputChange = (e) => {
        const value = Number(e.target.value);
        if (!isNaN(value)) {  // Validate number input
            setStartingValue(value);
        }   
    }; 
    const applySettings = () => {
        
        if(changeValue === 0){
            alert('Increment value cannot be zero!');
            return;
        }
        setCount(startingValue);
        setStartingValue(0);
        alert('Settings applied successfully');
    }

    const handleChangeValue = (e) => {
        const value = Number(e.target.value);
        // Prevent setting changeValue to 0 as it would break increment/decrement
        if (!isNaN(value) && value !== 0) {
            setChangeValue(value);
        }
    }

    return (
        <div className="settings">
            {!isOpen ? (
                <button className="settings-toggle-btn" onClick={() => setIsOpen(true)}>⚙️</button>
            ) : (
                <div className="settings-menu">
                <button 
                className="close-btn"
                onClick={() => setIsOpen(false)}>×</button>
                <h2>Settings</h2>
                <input type="number"
                placeholder="Select starting number"
                value={startingValue} 
                onChange={handleInputChange}/>

                <input type="number" 
                placeholder="Select inrementing value" 
                value={changeValue} 
                min='1'
                onChange={handleChangeValue}/>
                <button onClick={applySettings}>Apply Settings</button>
                </div>
            )}
            
        </div>
    )
}