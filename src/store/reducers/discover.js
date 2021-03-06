import {GET_DISCOVER_USERS} from "../actionTypes";

export default (state ={users: []}, action) => {
  switch (action.type){
    case GET_DISCOVER_USERS:
      return {
          ...state,
          users:[...action.users]
      }
    default:
      return state;
  }
}
