import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Statistic from "./pages/Statistic";
import PostDetails from "./pages/Posts/PostList/PostItem/PostDetails";
import { Layout } from "antd";
import { StyledContentWrapper } from "./styled";

const { Content } = Layout;

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Layout>
            <NavBar />
            <StyledContentWrapper>
              <Content
                className="site-layout"
                style={{
                  padding: "0 50px",
                  minHeight: "calc(100vh - 151.6px)",
                  marginTop: "20px",
                }}
              >
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/posts">
                  <Posts />
                </Route>
                <Route exact path="/posts/:id" component={PostDetails} />
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
            </StyledContentWrapper>
            <Footer />
          </Layout>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
