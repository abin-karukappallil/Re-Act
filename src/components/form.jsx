import { useState } from "react";
function Form() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const getWeight = (g) => {
    console.log(g.target.value);
    setWeight(g.target.value);

  };
  const getHeight = (e) => {
    console.log(e.target.value);
    setHeight(e.target.value);
  };
  return (
    <div>
      <div className="form-wrapper">
        <form action="post" className="form">
          <h1>BMI calculator</h1>
          <div className="label">
            <label>Height(m)</label>
            <input value={height} onChange={getHeight} type="text" />
            <label>Weight(kg)</label>
            <input value={weight} onChange={getWeight} type="text" />
          </div>
          <button>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Form
