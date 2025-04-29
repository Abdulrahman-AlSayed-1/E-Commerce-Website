import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",

    initialState: JSON.parse(localStorage.getItem("cart")) || {
        cartItems: [], // each item in array consist of the product object and the quantity of that product
        totalItems: 0 , // total number of distinct products
        orderSummary:{
            totalPrice:0,
            shipping:0,
            totalAmount:0, // the final price after multiplying products prices *  thier quantities + shipping  
            totalQuantity:0 // the totat quantity of products 
        }
    },

    reducers:{

        addItem:(state,{payload})=>{
        
        ( // Check if the item is not already in the cart
         !state.cartItems.some(item=>item.payload.id===payload.id)
         && ++state.totalItems  // increment the total amount by 1
         && state.cartItems.push({payload,quantity:1}) // add it with a quantity of 1
        ) //If the item is already in the cart, increment its quantity
        || state.cartItems[state.cartItems.findIndex(item=>item.payload.id===payload.id)].quantity++;
         
         state.orderSummary.totalQuantity++
         state.orderSummary.totalPrice+=payload.price
         state.orderSummary.shipping=state.orderSummary.totalPrice * 0.15 // 15% shipping fees from total price
         state.orderSummary.totalAmount = state.orderSummary.totalPrice + state.orderSummary.shipping
         
         localStorage.setItem("cart",JSON.stringify(state)); // Update local storage with the new cart state
        },
        subQuantity:(state,{payload})=>{
            const itemIndex=state.cartItems.findIndex(item=>item.payload.id===payload.id);
            state.cartItems[itemIndex].quantity--;
           
            !state.cartItems[itemIndex].quantity    // Check if the quantity is 0
            && state.cartItems.splice(itemIndex,1)  //  if so, remove the item from the cart
            && --state.totalItems;   // and decrement the total amount by 1
            
            state.orderSummary.totalQuantity--
            state.orderSummary.totalPrice-=payload.price
            state.orderSummary.shipping=state.orderSummary.totalPrice * 0.15  //recompute the shipping 
            state.orderSummary.totalAmount = state.orderSummary.totalPrice + state.orderSummary.shipping //recompute the totalAmount

            localStorage.setItem("cart",JSON.stringify(state)); // Update local storage with the new cart state
        },
    }
})

export const {addItem,subQuantity}=cartSlice.actions;
export default cartSlice.reducer;