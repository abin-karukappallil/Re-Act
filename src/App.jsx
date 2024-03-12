import { useState } from 'react';
import './App.css';
import BmiList from './components/BmiList';
import BmiScore from './components/BmiScore';
import Form from './components/form';


function App() {
  // let bmi = 18;
  const [bmi, setbmi] = useState("");
  const [bmiType, setbmiType] = useState("");
  return (
   <>
   
   
   <Form/>
   <BmiScore bmino={bmi} bminame={bmiType}/>
   <BmiList/>
   </>
  );
}

export default App;
