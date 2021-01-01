import "./App.css";
import { Switch, Route } from "react-router-dom";

import Home from "./component/Home";
import Search from "./component/Search";
import Filtered from "./component/Filtered.jsx";
import Navbar from "./component/Navbar.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/filtered" component={Filtered} />
      </Switch>
    </div>
  );
}

export default App;
