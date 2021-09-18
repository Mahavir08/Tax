import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Login from "./Login_and_Register/Login";
import Register from "./Login_and_Register/Register";
import Tax from "./Tax/TaxCollection";
import invalidDetails from "./Tax/invalidDetails";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/tax" component={Tax} />
        <Route exact path="/invalid" component={invalidDetails} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
