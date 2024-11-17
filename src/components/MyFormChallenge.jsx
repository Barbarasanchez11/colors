import { useEffect, useState, useRef } from "react";
import BoxColor from "./BoxColor";

const MyForm = () => {
  const inputRef = useRef(null);
  const [value, setValue] = useState('');
  const colors = ['red', 'green', 'pink', 'yellow', 'purple', 'grey', 'blue', 'aqua', 'olive'];

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <input 
        type="text" 
        placeholder="write a color" 
        onChange={handleChange} 
        value={value} 
        ref={inputRef} 
      />
      <div className="container">
        {colors.map((color) => (
          <BoxColor key={color} color={color} value={value} />
        ))}
      </div>
    </>
  );
}

export default MyForm;
