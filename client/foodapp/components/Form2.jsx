import { useState } from "react";

function Form2() {
  const [state, setState] = useState("");
  const handleInputChange = (event) => {
    setState(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);
  };
  return (
    <>
      <div>
        <label>
          <input
            type="radio"
            value="option1"
            checked={state == "option1"}
            onChange={handleInputChange}
            name="state"
          />
          option1
        </label>
        <label>
          <input
            type="radio"
            value="option2"
            checked={state == "option2"}
            onChange={handleInputChange}
            name="state"
          />
          option2
        </label>
        <label>
          <input
            type="radio"
            value="option3"
            checked={state == "option3"}
            onChange={handleInputChange}
            name="state"
          />
          option3
        </label>
      </div>
      <div>
        <button onClick={handleSubmit}>submit</button>
        <div>{state}</div>
      </div>
    </>
  );
}
export default Form2;
