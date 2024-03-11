import './App.css';
import BmiList from './components/BmiList';
import BmiScore from './components/BmiScore';
import Form from './components/form';


function App() {
  let bmi = 18;
  return (
   <>
   <div>My Bmi is {bmi}</div>
   <Form/>
   <BmiScore/>
   <BmiList/>
   </>
  );
}

export default App;
