import './App.css';
import { getContacts, getMessages } from './services/apiServices';

function App() {

  getMessages()

  return (
    <div className="App">
      App
    </div>
  );
}

export default App;
