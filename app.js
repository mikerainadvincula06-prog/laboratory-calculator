import { useState } from "react";

export default function App() {
  const [input, setInput] = useState("");

  const click = (val) => setInput(input + val);

  const calculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  const clear = () => setInput("");

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Calculator</h2>

      <input value={input} readOnly style={{ padding: "10px", width: "200px" }} />

      <div>
        {[1,2,3,"+",4,5,6,"-",7,8,9,"*",0,"C","=","/"].map((b) => (
          <button
            key={b}
            onClick={() => {
              if (b === "=") calculate();
              else if (b === "C") clear();
              else click(b);
            }}
            style={{ margin: "5px", padding: "10px" }}
          >
            {b}
          </button>
        ))}
      </div>
    </div>
  );
}
