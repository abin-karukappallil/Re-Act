import { useState } from "react";
function Form() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [alert, setAlert] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    if (isNaN(weight) || isNaN(height)) {
      alert("Invalid input");
    }
    else {
      console.log(weight);
      console.log(height);
    }

  }
  return (
    <div>
      <div className="form-wrapper">
        <form onSubmit={onSubmit} className="form">
          <h1>BMI calculator</h1>
          <div className="label">
            <label>Height(m)</label>
            <input value={height} onChange={(e) => { setHeight(e.target.value) }} type="text" required/>
            <label>Weight(kg)</label>
            <input value={weight} onChange={(e) => { setWeight(e.target.value) }} type="text" required />
          </div>
          <button>Submit</button>
          <div className="alert" role="alert"><h6>Please Enter A Valid Input</h6></div>
  
        </form>
         </div>
    </div>
  )
}

export default Form
