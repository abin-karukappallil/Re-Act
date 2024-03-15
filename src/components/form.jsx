import { useState } from "react";
function Form() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [alert, setAlert] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    if (isNaN(weight) || isNaN(height)) {
      setAlert(true);
    }
    else {
      setAlert(false);
      console.log(weight);
      console.log(height);
    }
  }
  let alertMessage;
  if(alert) {
    alertMessage =  <div className="alert" role="alert"><h6>Please Enter A Valid Input</h6></div>;
  }
  else {
    alertMessage = '';
  }
  return (
      <div className="form-wrapper">
        <form onSubmit={onSubmit} className="form">
          <h1>BMI calculator</h1>
          <div className="label">
            <label>Height(m)</label>
            <input value={height} onChange={(e) => { setHeight(e.target.value) }} type="text" required />
            <label>Weight(kg)</label>
            <input value={weight} onChange={(e) => { setWeight(e.target.value) }} type="text" required />
          </div>
          <button>Submit</button>
          {alert && <div className="alert" role="alert">Please Enter A Valid Input</div>}
        </form>
      </div>
  )
}

export default Form
