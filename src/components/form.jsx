function Form() {
  return (
    <div>
        <form action="post" className="form">
          <div className="label">
          <label htmlFor="height">Height</label>
          <input type="number" />
          <label htmlFor="weight">Weight</label>
          <input type="number" />
          </div>
          <button>Submit</button>
        </form>
    </div>
  )
}

export default Form
