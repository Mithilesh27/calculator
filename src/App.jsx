import React, { useState } from "react";
import "./App.css";
export default function App() {
  const [value, setValue] = useState("");
  const evaluate = () => {
    try {
      const result = eval(value);
      setValue(result.toString());
    } catch (error) {
      setValue("Error");
      `error:${console.log("Invalid Expression")}`;
    }
  };
  return (
    <div className="container">
      <div className="calculator">
        <div className="display">
          <input type="text" value={value} />
        </div>
        <div>
          <input type="button" value="AC" onClick={(e) => setValue("")} />
          <input
            type="button"
            value="DEL"
            onClick={(e) => setValue(value.slice(0, -1))}
          />
          <input
            type="button"
            value="."
            onClick={(e) => setValue(value + e.target.value)}
          />
          <input
            type="button"
            value="/"
            onClick={(e) => setValue(value + e.target.value)}
          />
        </div>
        <div>
          <input
            type="button"
            value="7"
            onClick={(e) => setValue(value + e.target.value)}
          />
          <input
            type="button"
            value="8"
            onClick={(e) => setValue(value + e.target.value)}
          />
          <input
            type="button"
            value="9"
            onClick={(e) => setValue(value + e.target.value)}
          />
          <input
            type="button"
            value="*"
            onClick={(e) => setValue(value + e.target.value)}
          />
        </div>
        <div>
          <input
            type="button"
            value="4"
            onClick={(e) => setValue(value + e.target.value)}
          />
          <input
            type="button"
            value="5"
            onClick={(e) => setValue(value + e.target.value)}
          />
          <input
            type="button"
            value="6"
            onClick={(e) => setValue(value + e.target.value)}
          />
          <input
            type="button"
            value="+"
            onClick={(e) => setValue(value + e.target.value)}
          />
        </div>
        <div>
          <input
            type="button"
            value="1"
            onClick={(e) => setValue(value + e.target.value)}
          />
          <input
            type="button"
            value="2"
            onClick={(e) => setValue(value + e.target.value)}
          />
          <input
            type="button"
            value="3"
            onClick={(e) => setValue(value + e.target.value)}
          />
          <input
            type="button"
            value="-"
            onClick={(e) => setValue(value + e.target.value)}
          />
        </div>
        <div>
          <input
            type="button"
            value="0"
            onClick={(e) => setValue(value + e.target.value)}
          />
          <input
            type="button"
            value="%"
            onClick={(e) => setValue(value + e.target.value)}
          />
          <input type="button" value="=" className="equal" onClick={evaluate} />
        </div>
      </div>
    </div>
  );
}
