import './App.css';
import Countries from './components/Countries';
import Order from './components/Order';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <h1>Countries App</h1>
      < SearchBar />
      < Order />
      < Countries />
    </div>
  );
}

export default App;
