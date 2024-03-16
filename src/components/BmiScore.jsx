function BmiScore({bmino,bminame}) {
  return (
    <div>
       <div className="main-score">
        <div className="score-wrap">
          <p>Your BMI Score</p>
          <div className="square-score">
            <h2>35.23</h2>
          </div>
          <h3>Over Weight</h3>
          <h5>"You need to lose 4.5Kg"</h5>
        </div>
       </div>
    </div>
  )
}

export default BmiScore
