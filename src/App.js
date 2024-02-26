import logo from './logo.svg';
import './App.css';
import HomePage from './page/HomePage';
import { Route, Routes } from 'react-router-dom';
import Navbar from '../src/components/common/Navbar'
function App() {
  return (
    <div className="App">
       <Navbar/>
       <Routes>
         <Route exact path='/' element = {<HomePage/>} />
       </Routes>
    </div>
  );
}

export default App;
