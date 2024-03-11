import { useState } from 'react';
import './App.css';
import BmiList from './components/BmiList';
import BmiScore from './components/BmiScore';
import Form from './components/form';


function App() {
  // let bmi = 18;
  const [bmi, setbmi] = useState(18);
  const [bmiType, setbmiType] = useState("overweight");
  return (
   <>
   <div>My Bmi is {bmi}</div>
   <button onClick={()=>{
    setbmi(33)
   }}>Click</button>
   
   <Form/>
   <BmiScore bmino={bmi} bminame={bmiType}/>
   <BmiList/>
   </>
  );
}

export default App;
