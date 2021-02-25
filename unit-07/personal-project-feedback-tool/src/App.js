import './App.css';
import routes from './routes'
import './reset.css'
import Nav from './components/Nav/Nav'

function App() {
  return (
    <div className="App">
      <Nav/>
      {/* <header className="App-header">
      Innovation station
      </header> */}
      {routes}
    </div>
  );
}

export default App;
