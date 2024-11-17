import {  useRef } from "react";


function BoxColor({ color, value }) {
  const boxRef = useRef(null);
  const isColor = color === value; 

  const colorCss = {
    color: isColor ? 'black' : color,
    backgroundColor: isColor ? color : 'white',
    borderColor: color
  };

  return (
    <div className={`box ${color}`} ref={boxRef} style={colorCss}>
      {isColor ?
        (<p>I'm a {value}</p>)
        : (<p>I'm not a {value} color</p>)
      }
    </div>
  );
}

export default BoxColor;