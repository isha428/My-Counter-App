import {useState} from "react";

const Counter = (props) => {
  console.log(props);
  let [value, setValue] = useState(0);
  const [disable, setDisable] = useState(true);
  const onAddition = () => {
    value = value + 1;
    setValue(value);
    console.log({value});
    if (value > 0) {
      setDisable(false);
    }
  };
  const onSubtraction = () => {
    value = value - 1;
    setValue(value);
    if (value === 0) {
      setDisable(true);
    }
  };
  const onOdd = () =>{
    if(value%2!=0){
    console.log({value},"is odd");
    }
  }
  const onEven = () =>{
    if(value%2===0){
      console.log({value},"is even")
    }
  }

  return (
    <>
      <button onClick={onAddition} disabled={disable}>
        +
      </button>
      <h1> {value}</h1>
      <button onClick={onSubtraction} disabled={disable}>
        -
      </button>
    </>
  );
};
export default Counter;
