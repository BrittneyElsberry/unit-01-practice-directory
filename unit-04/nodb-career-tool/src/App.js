import logo from './logo.svg';
import '../src/reset.css'
import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import Accomplishments from './components/Accomplishments'
import JobListing from './components/JobListing'
import axios from 'axios'
import Goals from './components/Goals'



function App() {
  return (
    <div className="App">
      <Main />
      <div className="goalAccompContainer">
      <Goals />
      <Accomplishments />
      </div>
     

    </div>
  );
}

export default App
