import './App.css';
import New from './components/New';
import All from './components/Dashboard';
import One from './components/One';
import Change from './components/Change';
import {Router} from '@reach/router';


function App() {

  return (
    <div className="App">
      <Router>
        <All path="/" />
        <New path="/new" />
        <One path="/recipes/:id" />
        <Change path="/recipes/:id/Change" />
      </Router>
    </div>
  );
}

export default App;
