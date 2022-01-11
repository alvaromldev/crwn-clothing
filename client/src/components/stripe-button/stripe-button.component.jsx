import axios from 'axios';
import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51KEXrFF5F4Jz6IIOOr1ZMpFt166o11nisZiyyHdUFo56Y9e1DVt147ltzA0Uc79FagHhj1HQYXxyuQhfGlUqabdb00y0Ze4JhD';

  const tokenHandle = (token) => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        alert('Payment successful!');
      })
      .catch((error) => {
        console.error('Payment error: ', JSON.parse(error));
        alert(
          'There was an issue with your payment. Please sure you use the provided credit card'
        );
      });
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={tokenHandle}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
