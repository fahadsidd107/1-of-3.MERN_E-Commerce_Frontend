import { loginStart } from "./userRedux";

export const login = async (dispatch,user){
    dispatch(loginStart());
}