import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Books from "./pages/Books";
import BookDetails from "./pages/Books/components/BookDetails/BookDetails";
import NotFoundPage from "./components/NotFoundPage";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/books" component={Books} />
          <Route exact path="/books/:id" component={BookDetails} />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
