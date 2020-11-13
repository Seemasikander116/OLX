import {ADD_TO_CART} from '../constants'
 export const addToCart=(data)=>{
    console.warn("action",data)
return{ 
    type:ADD_TO_CART,
data:data
}
   

}
export const  facebook_login = ()=>{
console.log("check facebook")
}