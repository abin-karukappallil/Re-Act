import { useState } from "react";
function Form() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <div>
      <div className="form-wrapper">
        <form onSubmit={onSubmit} className="form">
          <h1>BMI calculator</h1>
          <div className="label">
            <label>Height(m)</label>
            <input value={height} onChange={(e) => {setHeight(e.target.value)}} type="text" />
            <label>Weight(kg)</label>
            <input value={weight} onChange={(e) => {setWeight(e.target.value)}} type="text" />
          </div>
          <button>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Form
