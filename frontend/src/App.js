import logo from './logo.svg';
import './App.css';
import {Route, Switch} from "react-router-dom";

function App() {
  return (
    <Switch>\
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}

export default App;
