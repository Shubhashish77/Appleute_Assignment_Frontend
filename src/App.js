import React, { useEffect } from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import styled from "styled-components";
import { useDispatch } from "react-redux";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import MainLayout from "./hoc/MainLayout";
import Product from "./pages/Products/Product";

const Container = styled.div`
  margin: 0;
  width: 100%;
  height: calc(100vh - 90px);
  ${'' /* ${mobile({ height: `calc(200vh)` })} */}
`;

const Wrapper = styled.div`
  width: 90vw;
  height: 100%;
  margin: 20px auto;
  ${'' /* padding: 20px; */}
  border-radius: 25px;
  ${'' /* background-color: #444444; */}
  display: flex;
  ${'' /* ${mobile({ flexDirection: "column-reverse" })} */}

`;


function App() {

  return (
    <div style={{background: "white"}}>
      <BrowserRouter>
        <NavBar />
        <MainLayout>
          <Container>
            <Wrapper>
              <Routes>
                <Route active exact path="/login" element={<Login />} />
                {/* {notLogout ? <Redirect to="/dashboard" /> : <></>} */}
                {/* <Route active exact path="/signup" element={<SignUp />} /> */}
                <Route active exact path="/product" element={<Product />} />
              </Routes>
            </Wrapper>
          </Container>
        </MainLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;