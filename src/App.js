import './App.css';
import Playerlist from './component/Playerlist';


function App() {
  return (
    <div className="App">
      {/* Titre ajouté ici */}
      <header>
        <h1>FiFa players cards</h1>
      </header>
      <Playerlist />
    </div>
  );
}



export default App;
