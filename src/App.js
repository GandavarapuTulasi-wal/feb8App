import logo from './logo.svg';
import './App.css';
import Todo from './Todo'
import Average from './Average'
import AddNos from './AddNos'
import MiniCalculator from './MiniCalculator'

function App() {
  return (
    <div className="App">
      <Todo></Todo>
      <Average></Average>
      <AddNos number1={10} number2={20}></AddNos>
      <MiniCalculator number1={10} number2={20} operation={"multiply"}></MiniCalculator>
    </div>
  );
}

export default App;
