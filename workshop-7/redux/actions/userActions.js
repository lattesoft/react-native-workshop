import API from '../../constants/Api';
import axios from 'axios';

export const setNumber = ()=>{
    return async (dispatch) => {
        dispatch({
            type: "SET_NUMBER"
        });
    }
}

export const userLogin = ()=>{
    return async (dispatch) => {
        const res = await axios.get(API.LOGIN);
        dispatch({
            type: "SET_USER",
            payload: res.data.data
        });
    }
}

export const userLogout = ()=>{
    return (dispatch) => {
        dispatch({
            type: "RESET_USER"
        });
    }
}
