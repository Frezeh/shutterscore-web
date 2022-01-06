import Intro from "./components/intro";
import Navigation from "./components/navigation";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Intro />
        </Route>
        <Route exact path="/navigation">
          <Navigation />
        </Route>
      </Switch>
      {/* <Navigation /> */}
    </div>
  );
}

export default App;
