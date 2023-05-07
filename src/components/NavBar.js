import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
// import logo from '../images/letter-s.png';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Navigate } from 'react-router-dom';
import DropDown from './DropDown';
import { Badge } from '@mui/material';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { showToast } from '../utils/tools';
import {clearNotification} from '../store/actions/index'
import { logoutUser } from '../store/actions/users_actions';
// import { mobile } from '../responsive';


const Container = styled.div`
  width: 100vw;
  height: 70px;
  display:flex;
  background-color: #21262D;
  margin: 0 auto;
  border-bottom: 5px solid black;
  border-radius: 25px 10px;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5); 
  &:hover {
    box-shadow: 0px 10px 20px 5px rgba(0, 0, 0, 0.5);
  }
   ${'' /* ${mobile({ height: "50px" })} */}
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Left = styled.h1`
  flex: 1;
  display: flex;
  align-items: center;
  color: white;
  padding-left: 50px;
  ${'' /* ${mobile({ marginLeft: "10px" })} */}
`;

const Image = styled.img`
  margin: 0;
  width: 60px;
  height: 60px;
  background-color: #fff;
  border-radius: 50%;
  transform: rotate(15deg);
  ${'' /* ${mobile({ height: "40px", width: "40px" })} */}
`;

const Right = styled.div`
  flex: 3;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  padding-right: 40px;
  ${'' /* justify-content: center; */}
`;

const MenuItem = styled.div`
  display: flex;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  margin-left: 15px; 
  color: white;
  padding: 8px;
  border-radius: 25px;
  &:hover{
    background-color: #444444;
  }
  ${'' /* ${mobile({ fontSize: "20px", marginLeft: "10px", padding: "5px" })} */}
`;
const NavBar = () => {
  const notification = useSelector(state => state.notification);
  const users = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(()=>{
    if(notification && notification.error){
      const msg = notification.msg ? notification.msg : 'Error';
      showToast('ERROR', msg);
      dispatch(clearNotification());
    }
    if (notification && notification.success) {
      const msg = notification.msg ? notification.msg : 'Success';
      showToast('SUCCESS', msg);
      dispatch(clearNotification());
    }
  },[notification,dispatch])

  const handleLogout = () => {
    dispatch(logoutUser());
  }
    return (
        <Container>
            <Wrapper>
                <Left>
                    <span>Appleute</span>
                </Left>
                <Right>
                  {
                    users && users.auth ? 
                    <>
                      <MenuItem onClick={handleLogout}>
                        logout
                      </MenuItem>
                      <MenuItem>
                        <Badge badgeContent={4} color="primary">
                          <ShoppingCartIcon />
                        </Badge>
                      </MenuItem>
                      <MenuItem>
                        <DropDown />
                      </MenuItem>
                    </> : 
                    <>
                      <NavLink to="/login">
                        <MenuItem>
                          Login
                        </MenuItem>
                      </NavLink>
                      <NavLink to="/register">
                        <MenuItem>
                          Register
                        </MenuItem>
                      </NavLink>
                    </>
                  }
                </Right>
            </Wrapper>
        </Container>
    )
}

export default NavBar;