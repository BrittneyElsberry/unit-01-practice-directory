import logo from './logo.svg';
import '../src/reset.css'
import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import Accomplishments from './components/Accomplishments'
import JobListing from './components/JobListing'
import axios from 'axios'


function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Accomplishments />
      <JobListing />
    </div>
  );
}

export default App
