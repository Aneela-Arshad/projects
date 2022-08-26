import logo from './logo.svg';
import './App.css';
import User from './component/User';
import Comp from './component/Comp';
function App() {
  // component k ander component use 
  // function Apple()
  // {
  //   return(<div>Apple Component</div>)
  // }
  return (
    <div className='App'>
      <button>click me</button>
      {/* <User />
      <Apple />
      <Comp /> */}

    </div>
  );
}

export default App;
