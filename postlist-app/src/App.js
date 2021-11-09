import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Statistic from "./pages/Statistic";
import { Result, Button } from "antd";
import { Layout } from "antd";

const { Content } = Layout;

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Layout style={{ minHeight: "100vh" }}>
            <NavBar />
            <Content
              className="site-layout"
              style={{
                padding: "0 50px",
                marginTop: 64,
                backgroundColor: "#fff",
              }}
            >
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/posts">
                <Posts />
              </Route>
              <Route exact path="/statistic">
                <Statistic />
              </Route>
              <Route path="">
                {/* <Result
                  status="404"
                  title="404"
                  subTitle="Sorry, the page you visited does not exist."
                  extra={<Button type="primary">Back Home</Button>}
                /> */}
              </Route>
            </Content>
            <Footer />
          </Layout>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
