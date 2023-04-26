import React,{useState} from "react";
import './counterapp.css'

function CounterApp() {
    const [count, setCount] = useState(0);

    const hanleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        if (count > 1 ) {
          setCount(count - 1);
        }
    
};
return (
    <div> 
        <h1>COUNTER APP</h1>
        <p>Count: {count}</p>
        <button onClick={hanleIncrement}>Increase</button>
        <button onClick={handleDecrement}>Decrease</button>
    </div>
);
}
export default CounterApp;