import {LOAD_USER_FOLLOW, UPDATE_FOLLOW_LIST} from "../actionTypes";

const follow = (state = [], action) => {
  switch(action.type){
    case LOAD_USER_FOLLOW:
      return action.users
      case UPDATE_FOLLOW_LIST:
        state = changeState(action.id, action.update, state);
        return [...state]
      default:
        return state;
  }
};

function changeState(value, desc, theState){
  let test = theState;
    for (var i in test){
      let valueToString = value.toString();
      if(i === valueToString){
        test[i].following = desc;
        break;
      }
    }
    return test
}

export default follow;