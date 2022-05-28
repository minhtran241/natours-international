/* eslint-disable */

import axios from 'axios';
import { showAlert } from './alert';

export const bookTour = async (tourId) => {
  const stripe = Stripe(
    'pk_test_51L1uPCIHRqBw2qaqLjXwyLg3biyyNgvzs78NeUQteInAgHLnXYrgnWdDMR3Ri4cBkC2GVTy6FqKwCoVxGh1AYNgS00CRyVmLKu'
  );
  try {
    // 1) Get checkout session from API
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);
    // console.log(session);

    // 2) Create checkout form + charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
