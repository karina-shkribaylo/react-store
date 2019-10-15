const SET_USERS_DATA = 'SET_USERS_DATA';

let initialState = {
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USERS_DATA:
        return {
            ...state,
            ...action.data,
            isAuth: true
        }
        default:
            return state;
    }
}


export const setUserData = (email, password) => ({type: SET_USERS_DATA, email, password})

export default authReducer