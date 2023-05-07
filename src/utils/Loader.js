import React from 'react'
import styled from 'styled-components'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Loader = (props) => {
    const [open, setOpen] = React.useState(props.active);
    return (
        <Container>
                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={open}
                >
                    <CircularProgress color="inherit" />
                </Backdrop>
        </Container>
  )
}
