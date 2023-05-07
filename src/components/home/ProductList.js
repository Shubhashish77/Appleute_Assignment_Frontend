import React, { useState } from 'react'
import styled from 'styled-components'
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

const Container = styled.div`
   
`;

const Menu = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
`;

const MenuItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 5px;
    font-weight: 800;
`;

const ProductList = ({product, cartItem,setCartItem}) => {

    
  const [addedToCart, setAddedToCart] = useState(false);
  const handleCart = () =>{
      setCartItem([...cartItem, product._id]);
      setAddedToCart(true);
  }
    
  return (
    <Container>
          <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                  sx={{ height: 140 }}
                  image={product.img}
                  title={product.title}
              />
              <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                      {product.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                      {product.desc}
                  </Typography>
              </CardContent>
              <CardActions>
                    <Menu>
                        <MenuItem>
                            <AddShoppingCartIcon style={{ color: "black" }} /> 
                        </MenuItem>
                        { addedToCart ? <MenuItem>
                            Added
                        </MenuItem> :
                        <MenuItem onClick={handleCart}>    
                            Add to Cart
                        </MenuItem>
                        }
                    </Menu>
                    <Menu>
                        <MenuItem>
                            <ShoppingBagOutlinedIcon style={{ color: "black" }} />
                        </MenuItem>
                        <MenuItem>
                            Buy Now
                        </MenuItem>
                    </Menu>
                  
              </CardActions>
          </Card>
    </Container>  
  )
}

export default ProductList