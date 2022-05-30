import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { increase, decrease, reset } from './store/counterStore';
import { setUserName } from './store/userStore';

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const { name } = useSelector((state) => state.user.user);

  const increaseTotal = () => {
    dispatch(increase());
  }

  const decreaseTotal = () => {
    dispatch(decrease());
  }

  const resetTotal = () => {
    dispatch(reset());
  }

  const _setUserName = (name) => {
    dispatch(setUserName(name));
  };

  return (
    <div className="App">
      <div className=' mt-4 border'><h1>{counter.total}</h1></div>
        <div className='mt-3'>
        <button className='btn btn-primary me-2' onClick={() => {
          increaseTotal(); 
        }} >INCREASE</button>
        <button className='btn btn-success me-2' onClick={() => {
          decreaseTotal(); 
        }}>DECREASE</button>
        <button className='btn btn-warning' onClick={() => {
          resetTotal(); 
        }}>RESET</button>
        </div>

        <div className='mt-4'>
            <h1 className='border'>{ name }</h1>
            <div className='mt-3'>
            <input id="username" />
            <button onClick={() => {
              _setUserName(document.getElementById("username").value);
            }} > İsmi değiştir </button>
            </div>
        </div>

    </div>
  );
}

export default App;
