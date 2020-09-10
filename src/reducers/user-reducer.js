import {userAPI} from "../api/api";

const USER = "USER";

const initialState = {
    user:null
};

const userReducer = (state = initialState, action ) => {

    switch (action.type) {
        case USER:
            return {
                ...state,
                user: action.user
            };
        default:
            return state
    }
};


export const setUser = (user) => ({type:USER, user}) ;

export const getUser = () => {
    return (dispatch) => {
        userAPI.getUser()
            .then(response => {
                dispatch(setUser(response.data))
            })
    }


};

export const deleteUser = (id) => {
  return (dispatch) => {
      userAPI.deleteUser(id)
          .then(response => {
              dispatch(setUser(response.date))
          })
  }
};

export default userReducer;