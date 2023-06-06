import { useState } from "react";

function Form3() {
  const [state, setState] = useState({
    fname: "",
    phoneno: "",
    hobby: "",
  });

  const handleInputChange = (event) => {
    setState((prevState) => ({
      ...prevState,
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
        <label>First Name</label>
        <input
          type="text"
          value={state.fname}
          name="fname"
          onChange={handleInputChange}
        />
        <br />
        <label> Phone Number</label>
        <input
          type="number"
          name="phoneno"
          value={state.phoneno}
          onChange={handleInputChange}
        />
        <br />
        <label>Slect yopur fav Hobby</label>
        <div>
          <label>
            <input
              type="radio"
              name="hobby"
              value="cricket"
              checked={state.hobby == "cricket"}
              onChange={handleInputChange}
            />
            Cricket
          </label>
          <label>
            <input
              type="radio"
              name="hobby"
              value="football"
              checked={state.hobby == "football"}
              onChange={handleInputChange}
            />
            Football
          </label>
        </div>
        <div>
          <button onClick={handleClick}>Submit</button>
        </div>
      </div>
    </>
  );
}
export default Form3;
