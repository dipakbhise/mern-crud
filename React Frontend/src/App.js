import React from "react"
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Addstudent from "./Components/Addstudent";
import Editstudent from "./Components/Editstudent";
import Home from "./Components/Home";
import Viewstudent from "./Components/Viewstudent";

function App() {
  return (
    <div className="App">

    <Router>


    <Switch>
    <Route exact path="/"><Home/></Route>
      <Route exact path="/editstudent/:id"><Editstudent/></Route>
      <Route exact path="/viewstudent/:id"><Viewstudent/></Route>
    </Switch>

    </Router>
      
    </div>
  );
}

export default App;
