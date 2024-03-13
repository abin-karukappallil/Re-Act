function Form() {
  return (
    <div>
        <form action="post" className="form">
          <label htmlFor="height">Height</label>
          <input type="number" />
          <label htmlFor="weight">Weight</label>
          <input type="number" />
          <button>Submit</button>
        </form>
    </div>
  )
}

export default Form
