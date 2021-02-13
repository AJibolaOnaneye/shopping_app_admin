import authReducer from './auth.reducers';
import userReducer from './user.reducers'
import categoryReducer from './category.reducers';
import orderReducer from './order.reducers';
import productReducer from './product.reducers';
import pageReducer from './page.reducers';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    category: categoryReducer,
    order: orderReducer,
    product: productReducer,
    page: pageReducer

})

export default rootReducer