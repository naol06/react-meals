export const addToCart=({id,price,rating,image,title})=>{
    return{
        type:"ADD_TO_CART",
        item:{

            id:id,
            price:price,
            rating:rating,
            title:title,
            image:image,
        }
    }
}
export const removeFromCart=(id)=>{
   
    return{
        type:"REMOVE_FROM_CART",
     id:id,
    }
}
export const userState=(user)=>{
   
    return{
        type:"USER_STATE",
     user:user,
    }
}