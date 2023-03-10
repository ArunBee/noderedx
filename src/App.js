import logo from './logo.svg';
import './App.css';
import User from './User';
import HomeContiner from './Container/HomeContainer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        {/* <h1>Hello </h1>
        <User data = {{name:"Arun", age:"29"}} /> */}
        <HomeContiner/>
      </header>
    </div>
  );
}

export default App;
