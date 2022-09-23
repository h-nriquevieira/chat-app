import './App.css';
import { getContacts } from './services/apiServices';

function App() {

  getContacts()

  return (
    <div className="App">
      App
    </div>
  );
}

export default App;
