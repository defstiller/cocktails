import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-reouter-dom"
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Search />
          <Cocktails />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
