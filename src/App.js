import React, { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import NavBar from "./components/NavBar";
import { useDispatch, useSelector } from "react-redux";

import Login from "./components/Auth/Login"
import Register from "./components/Auth/Register"
import Products from "./components/home/Products";
import MainLayout from "./hoc/mainLayout";

import { isLoggedIn } from "./store/actions/users_actions";
import { Loader } from "./utils/Loader";


function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const users = useSelector(state => state.user);

  useEffect(()=>{
    dispatch(isLoggedIn()); 
  },[dispatch])

  useEffect(()=> {
    if(users && users.auth !==null){
      setLoading(false);
    }
  },[users])

  return (
    <div style={{background: "white"}}>
      <BrowserRouter>
        <NavBar />
        { loading ? <Loader active={loading}/> : 
          <MainLayout>
            <Routes>
              <Route active exact path="/login" element={<Login />} />
              <Route active exact path="/register" element={<Register />} />
              {/* {notLogout ? <Redirect to="/dashboard" /> : <></>} */}
              {/* <Route active exact path="/signup" element={<SignUp />} /> */}
              <Route active exact path="/product" element={<Products />} />
            </Routes>
          </MainLayout>  
        }
      </BrowserRouter>
    </div>
  );
}

export default App;