import { useState } from "react";
function Form() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  return (
    <div>
        <div className="form-wrapper">
        <form action="post" className="form">
          <h1>BMI calculator</h1>
          <div className="label">
          <label htmlFor="height">Height(m)</label>
          <input type="number" />
          <label value={weight} onChange={(e)=> setWeight(e.target.value)} htmlFor="weight">Weight(kg)</label>
          <input type="number" />
          </div>
          <button>Submit</button>
        </form>
        </div>
    </div>
  )
}

export default Form
