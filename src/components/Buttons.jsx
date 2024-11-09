export default function Buttons(props) {
    const {count, setCount, changeValue} = props;

    const handleIncrement = () => {
        setCount(prevCount => prevCount + Number(changeValue));
    }

    const handleDecrement = () => {
        setCount(prevCount => prevCount - Number(changeValue))
    }


    return (
        <div className="buttons">
        <button onClick={() => {
            setCount(count + changeValue);
        }}>Increment</button>

        <button onClick={() => {
            setCount(count - changeValue);
        }}>Decrement</button>

        <button onClick={() => {
            setCount(0);
        }}>Reset</button>
        </div>
    );
}