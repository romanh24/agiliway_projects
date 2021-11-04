import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar";
import AppRouter from "./components/Routes";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <AppRouter />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
