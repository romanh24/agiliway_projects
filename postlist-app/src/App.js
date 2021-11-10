import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Statistic from "./pages/Statistic";
import { Result, Button } from "antd";
import { Layout } from "antd";
import { ContentWrapper } from "./styled";

const { Content } = Layout;

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Layout>
            <NavBar />
            <ContentWrapper>
              <Content
                className="site-layout"
                style={{
                  padding: "0 50px",
                  minHeight: "calc(100vh - 131.6px)",
                  // marginTop: 64,
                  // backgroundColor: "#fff",
                  // minHeight: "80vh",
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
            </ContentWrapper>
            <Footer />
          </Layout>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
