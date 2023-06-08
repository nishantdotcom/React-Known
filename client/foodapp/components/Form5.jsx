import { useState } from "react";

function Form5() {
  const [userinfo, setUserInfo] = useState({
    languages: [],
    response: [],
  });

  const handleClick = (event) => {
    console.log(userinfo.languages);
  };

  const handleChange = (e) => {
    // console.log(e);
    const { value, checked } = e.target;
    const { languages } = userinfo;
    console.log(`${value} is ${checked}`);
    if (checked) {
      setUserInfo({
        languages: [...languages, value],
      });
    } else {
      setUserInfo({
        languages: languages.filter((x) => x !== value),
      });
    }
  };

  return (
    <>
      <div>
        <div>
          <h1>Select your Fav Language</h1>
        </div>
        <div>
          <input
            type="checkbox"
            name="languages"
            value="javascript"
            onChange={handleChange}
          />
          <label>Javascript</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="languages"
            value="python"
            onChange={handleChange}
          />
          <label>Python</label>
        </div>

        <div>
          <input
            type="checkbox"
            name="languages"
            value="java"
            onChange={handleChange}
          />
          <label>java</label>
        </div>

        <div>
          <input
            type="checkbox"
            name="languages"
            value="php"
            onChange={handleChange}
          />
          <label>PHP</label>
        </div>
      </div>
      <div>
        <button onClick={handleClick}>Click</button>
      </div>
    </>
  );
}
export default Form5;
