function Form() {
  return (
    <div>
        <form action="post" className="form">
          <h1>BMI calculator</h1>
          <div className="label">
          <label htmlFor="height">Height(m)</label>
          <input type="number" />
          <label htmlFor="weight">Weight(kg)</label>
          <input type="number" />
          </div>
          <button>Submit</button>
        </form>
    </div>
  )
}

export default Form
