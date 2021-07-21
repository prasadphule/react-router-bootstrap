import { Route, Switch } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Header from "./components/Header";
import Home from "./components/Home";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="col-lg-8 mx-auto p-3 py-md-5">
      <Header />
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/about-us" component={AboutUs} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;

