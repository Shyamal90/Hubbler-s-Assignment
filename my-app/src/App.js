import './App.css';
import Navbar from './components/Navbar/Navbar';
import Rule from './components/Rules/Rule';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <section>
        <Sidebar/>
        <Rule/>
      </section>
    </div>
  );
}

export default App;
