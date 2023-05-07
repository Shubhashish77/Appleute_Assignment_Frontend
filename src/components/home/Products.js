import React, { useEffect, useState } from 'react'
import { Grid } from '@mui/material';
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux';

// ACTION
import { getProducts } from '../../store/actions/product_action';

// COMPONENTS
import ProductList from './ProductList';

const Container = styled.div`
  padding : 10px;
`;

const Products = () => {
    const {product} = useSelector(state => state.products);
    const dispatch = useDispatch();
    const [cartItem, setCartItem] = useState([])

    useEffect(() => {
        if (!product) {
            dispatch(getProducts());
        }
    }, [dispatch, product])
    console.log("cartItem ", cartItem);
    return (
        <Container>
            <Grid container spacing={2} >
                { product ? (
                    product.map((item) => 
                        <Grid key={item._id} item xs={12} sm={6} md={3} lg={2} letterSpacing={3}>
                            <ProductList 
                                product={item}
                                cartItem={cartItem}
                                setCartItem={setCartItem}
                            />
                        </Grid>
                    ) 
                ) : <> "No item" </>}

            </Grid>
        </Container>
  )
}

export default Products