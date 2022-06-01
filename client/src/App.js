import './App.css';
import Countries from './components/Countries';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <h1>Countries App</h1>
      < SearchBar />
      < Countries />
    </div>
  );
}

export default App;
