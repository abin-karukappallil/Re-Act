import { useState } from 'react';
import './App.css';
import BmiList from './components/BmiList';
import BmiScore from './components/BmiScore';
import Form from './components/form';


function App() {
  // let bmi = 18;
  const [bmi, setbmi] = useState("");
  const [bmiType, setbmiType] = useState("");
  const onFormSub = (w,h)=>{
    console.log(w,h);
  }
  return (
   <>
   
   
   <Form getData={onFormSub}/>
   <BmiScore bmino={bmi} bminame={bmiType}/>
   <BmiList/>
   </>
  );
}

export default App;
