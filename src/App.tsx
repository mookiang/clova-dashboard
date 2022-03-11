import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";

import Header from "./Layouts/Header";
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
        {/* <Header /> */}
        <Container>
          <Sidebar />
          <Routes>
            <Route path="/billing" element={<Billing />}></Route>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </Container>
      </Router>
    </>
  );
}

export default App;
