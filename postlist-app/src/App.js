import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Statistic from "./pages/Statistic";
import { Layout } from "antd";
const { Content, Footer } = Layout;

//

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
              {/* <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb> */}
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/post-list">
                <Posts />
              </Route>
              <Route exact path="/statistic">
                <Statistic />
              </Route>
              {/* <div
                className="site-layout-background"
                style={{ padding: 24, minHeight: "80vh" }}
              >
                Content
              </div> */}
            </Content>
            <Footer style={{ textAlign: "center" }}>
              ©2021 Created by Roman H.
            </Footer>
          </Layout>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
