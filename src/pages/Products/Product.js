import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {getProducts} from '../../store/actions/product_action'
import styled from 'styled-components';


const Container = styled.div`
   width: 100vw;
`;

const Wrapper = styled.div`
   display: flex;
`;

const Card = styled.div`
   width: 32%;
   height: 350px;
   border-radius: 5%;
   background: #f5f5f5;
   padding: 10px;
   margin: 10px;
   box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const CardWrapper = styled.div`
   display: flex;
   flex-direction: column;
`
const Image = styled.img`
   width: 100%;
   height: 200px;
   border-radius: 5%;
`;

const Title = styled.h3`
   display: flex;
   aligh-items: center;
   justify-content: center;
`;

const Product = () => {
    const products = useSelector(state => state.products);
    const dispatch = useDispatch();
    
    useEffect(()=>{
        if(products && !products.product){
           dispatch(getProducts());
        }   
    }, [dispatch, products])

    return (
        <Container>
            <Wrapper>
                {products && products.product &&products.product.map((item)=>(
                    <Card>
                        <CardWrapper>
                            <Image src={item.img}/>
                        </CardWrapper>
                        <Title>{item.title}</Title> 
                    </Card>
                ))}
            </Wrapper>
        </Container>
    )
}

export default Product