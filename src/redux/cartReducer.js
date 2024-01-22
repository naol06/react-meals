const initialState={
    cart:[],
    user:null
}
export const cartReducer=(state=initialState,action)=>{
    
    
switch (action.type) {
    case "ADD_TO_CART":
     return{
...state,cart:[...state.cart,{item:action.item}]
     }

     case "REMOVE_FROM_CART":
        const newarr=state.cart
       return{
      
        cart:[...state.cart.filter(newarr=>newarr.item.id!== action.id)]
       }
       case "USER_STATE":
      
       return{
      ...state,
      user:action.user
        
       }
       
    
    default:
     return state
}
}