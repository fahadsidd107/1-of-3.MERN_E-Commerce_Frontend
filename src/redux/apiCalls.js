import { loginStart,loginFailure } from "./userRedux";
import { userRequest } from ",,/requestMethods";

export const login = async (dispatch,user)=>{
    dispatch(loginStart());
    try{
        const res = await userRequest
        // .post("/users/login",user);
    }catch(err){
        dispatch(loginFailure());
    }
}