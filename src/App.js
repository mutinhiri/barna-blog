
import Navbar from './Navbar';
import Home from './Home';

function App() {
  const title = "welcome to your first training session"
  return (
    <div className="App">
      <Navbar  />
      <Home />
      <div className="content">
        <h1>App Components</h1>
        <p>{ title}</p>
      </div>

    </div>
  );
}

export default App;
