import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Create from './pages/Create';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
        <div className="content">
          <Switch>

            <Route exact path="/">
            <Home />
            </Route>

            <Route paath="/create">
            <Create />
            </Route>
          </Switch>
       
      </div>
      </div>
      </Router>
  );
}

export default App;
