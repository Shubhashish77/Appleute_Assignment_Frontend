import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 50px;
  width: 100vw;
`;

const MainLayout = (props) => {
  return (
    <Container>
        {props.children}
        <ToastContainer/>
    </Container>
  )
}

export default MainLayout