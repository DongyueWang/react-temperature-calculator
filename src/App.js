import logo from './logo.gif';
import './App.css';
import TemperatureCalculator from './TemperatureCalculator'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TemperatureCalculator />

      </header>
    </div>
  );
}

export default App;
