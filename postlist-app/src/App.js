import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import AppRouter from "./routes";
import { Layout } from "antd";
import { StyledContentWrapper } from "./styled";

const { Content } = Layout;

function App() {
  return (
    <div className="App">
      <Router>
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
              <AppRouter />
            </Content>
          </StyledContentWrapper>
          <Footer />
        </Layout>
      </Router>
    </div>
  );
}

export default App;
