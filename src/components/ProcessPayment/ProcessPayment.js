import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from '../CheckoutForm/CheckoutForm';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51IeB7TBBJkS9tmeMjnJmbYCnk5MdmRKLb7TQEA055nZ19ofituVOuWyYH6nGY7vDZLYRnEdzWNK9lHXtXVyASdsV00SwSSPeRd');

const ProcessPayment = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm></CheckoutForm>
    </Elements>
  );
};

export default ProcessPayment;