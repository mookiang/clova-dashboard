import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Home from "./Routes/Home";
import Billing from "./Routes/Billing";
import Sidebar from "./Layouts/Sidebar";

const Container = styled.div`
  display: flex;
`;

function App() {
  return (
    <>
      <Router>
        <Container>
          <Sidebar />
          <Routes>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/billing" element={<Billing />}></Route>
          </Routes>
        </Container>
      </Router>
    </>
  );
}

export default App;