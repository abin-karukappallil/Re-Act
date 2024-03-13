import { useState } from "react";
function Form() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const getWeight = (e) => {
    console.log(e.target);
    setWeight(e.target.value);


  };
  return (
    <div>
      <div className="form-wrapper">
        <form action="post" className="form">
          <h1>BMI calculator</h1>
          <div className="label">
            <label htmlFor="height">Height(m)</label>
            <input type="number" />
            <label  htmlFor="weight">Weight(kg)</label>
            <input value={weight} onChange={getWeight} type="text" />
          </div>
          <button>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Form
