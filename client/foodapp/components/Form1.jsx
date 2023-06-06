import { useState } from "react";

function Form1() {
  const [state, setState] = useState({
    fname: "",
    phone: "",
  });

  const handleInputChange = (event) => {
    setState((prevProps) => ({
      ...prevProps,
      [event.target.name]: event.target.value,
    }));
  };

  const handleClick = (event) => {
    event.preventDefault();
    console.log(state);
  };

  return (
    <>
      <div>
        <label> First name</label>
        <input
          type="text"
          name="fname"
          value={state.fname}
          onChange={handleInputChange}
        />
        <br />
        <label>Phone no</label>
        <input
          type="number"
          name="phone"
          value={state.phone}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <button onClick={handleClick}>Submit </button>
      </div>
      <div>{state.fname}</div>
    </>
  );
}
export default Form1;
