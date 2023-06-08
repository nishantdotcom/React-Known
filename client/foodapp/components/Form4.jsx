import { useState } from "react";

function Form4() {
  const [isChecked, setIsChecked] = useState(false);

  const handleInputChange = (event) => {
    if (isChecked == false) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  };
  const handleClick = (event) => {
    event.preventDefault();
    console.log(isChecked);
  };

  return (
    <>
      <div>
        select your pizza topings
        <div>
          <input
            type="checkbox"
            name="toppings"
            value="Panner"
            checked={isChecked}
            onChange={handleInputChange}
          />
          Term and Condition
        </div>
      </div>
      <div>{isChecked ? "Checked" : "UnChecked"}</div>
    </>
  );
}
export default Form4;
