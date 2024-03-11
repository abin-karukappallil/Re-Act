import { useState } from 'react';
import './App.css';
import BmiList from './components/BmiList';
import BmiScore from './components/BmiScore';
import Form from './components/form';


function App() {
  // let bmi = 18;
  const [bmi, setbmi] = useState(18)
  const changeBmi = () => {
    // bmi = 20;
    setbmi(19)
  }
  return (
   <>
   <div>My Bmi is {bmi}</div>
   <button onClick={changeBmi}>Click</button>
   
   <Form/>
   <BmiScore/>
   <BmiList/>
   </>
  );
}

export default App;
