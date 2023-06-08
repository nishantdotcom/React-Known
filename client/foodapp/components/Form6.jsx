import { useState } from "react";

function Form6() {
  const [selectOption, setSelectOption] = useState("");

  const handleSelectChange = (event) => {
    setSelectOption(event.target.value);
  };

  return (
    <>
      <div>
        <select value={selectOption} onChange={handleSelectChange}>
          <option value="">Select</option>
          <option value="option1"> option1</option>
          <option value="option2"> option2</option>
          <option value="option3"> option3</option>
          <option value="option4"> option4</option>
        </select>
      </div>
      <div>{selectOption}</div>
    </>
  );
}
export default Form6;
