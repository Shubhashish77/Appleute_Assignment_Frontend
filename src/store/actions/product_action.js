import * as products from './index';
import axios from 'axios';


export const getProducts = () => {
    return async (dispatch, getState) => {
        try {
            const response = await axios.get(`http://localhost:4000/api/v1/products`);
            dispatch(products.getProducts(response.data));
            dispatch(products.successGlobal('success'))
        } catch (error) {
            dispatch(products.errorGlobal('Error loading Products'))
        }
    }
}
