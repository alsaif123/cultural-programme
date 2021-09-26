import React from 'react';

const Cart = (props) => {
    const {cart} = props;

    let totalQuantity = 0;
    let total = 0;
    for(const informations of cart){
        if(!informations.quantity){
            informations.quantity = 1;
        }
        
        total = total + informations.taka * informations.quantity;

        totalQuantity = totalQuantity + informations.quantity;
    }
    return (
        <div>
            <h5>Items Ordered:{totalQuantity}</h5>
            <p>Total : {total}</p>
        </div>
    );
};

export default Cart;