export default function(state = {}, action) {
    switch (action.type) {
      case "LOG_IN": 
      return action.payload;
     //   loggedInUser: action.payload
    
      default:
        return state;
    }
  }