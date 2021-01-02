import axios from "../helpers/axios";
import { userConstants } from "./constants"

export const logup = (user) => {

    console.log(user);

    return async (dispatch) => {

        dispatch({ type: userConstants.USER_REGISTER_REQUEST })

        const res = await axios.post('/admin/signup', {
            ...user
        })

        if(res.status === 201) {
            const { token, user } = res.data;
       
            dispatch({ 
                type: userConstants.USER_REGISTER_SUCCESS,
                payload: {
                    message: 'successfully registered!'
                }
            })
        }else {
            if(res.status === 400) {
                dispatch({
                    type: userConstants.USER_REGISTER_FAILURE,
                    payload: {error: res.data.error}
                })
            }
        }

    }
}