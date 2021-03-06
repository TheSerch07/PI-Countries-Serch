import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './components/Home';
import Landing from './components/Landing';
import CreateActivity from './components/CreateActivity'
import Detail from './components/Detail' 

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Landing/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/activity' element={<CreateActivity/>} />
        <Route path='/home/:id' element={<Detail/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
