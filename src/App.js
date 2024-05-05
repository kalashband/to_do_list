import logo from './logo.svg';
import Hero from './Components/Hero'
import TaskList from './Components/TaskList'
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>TO DO APP </h1>
        <Hero />
        <TaskList/>
      </header>
    </div>
  );
}

export default App;
