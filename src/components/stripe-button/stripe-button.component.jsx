import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_D8H1pQWsABS3WuoTorCp8waR00n6H3QNRc';

const onToken = token => {
    console.log(token);
    alert('Payment Successfull')
    
}

    return (
        <StripeCheckout 
            label='Pay Now'
            name='Quancoder Ltd.'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
};

export default StripeCheckoutButton;