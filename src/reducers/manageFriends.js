export function manageFriends(state, action){
  
  switch(action.type) {
    case "ADD_FRIEND":
      return {
        ...state,
        friends: [...state.friends, action.friend]
      }
      
      break
    
    case "REMOVE_FRIEND":
      const indexToRemove = 
      
      return {
        
      }
  }
}
