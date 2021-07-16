import logo from './logo.svg';
import './App.css';
// import Charts from './Charts';
import Demo from './Demo';
import LineChart from './components/LineChart';
import BarChart from './components/BarChart';
import DoughnutChart from './components/DoughnutChart';
// import Demo1 from './Demo1';

function App() {
  return (
    <div className="App">
  <div className="line-chart">
    <LineChart/>
    <BarChart/>
    <DoughnutChart/>
  </div>
    </div>
  );
}

export default App;
