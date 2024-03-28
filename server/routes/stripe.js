
const express = require('express');
const router = express.Router();
const stripe = require('stripe')('https://buy.stripe.com/test_cN2bJc6Tl3cYfrGaEH');
router.post('/create-checkout-session', async (req, res) => {
    try {
      // Retrieve product details from request body or database
      const product = { name: 'Your Product Name', description: 'Your Product Description', image: 'path_to_image', price: 10 }; // Example product details
  
      // Create a checkout session with Stripe
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        success_url: `${req.protocol}://${req.get('host')}/checkout/success`,
        cancel_url: `${req.protocol}://${req.get('host')}/checkout/cancel`,
        customer_email: req.user.email, // Assuming user is authenticated and req.user contains user details
        client_reference_id: req.body.productId, // Assuming productId is passed in request body
        line_items: [{
          price_data: {
            currency: 'usd',
            product_data: {
              name: product.name,
              description: product.description,
              images: [`${req.protocol}://${req.get('host')}/${product.image}`],
            },
            unit_amount: product.price * 100,
          },
          quantity: 1,
        }],
        mode: 'payment',
      });
  
      res.json({ sessionId: session.id }); // Return session ID to client
    } catch (error) {
      console.error('Error creating session:', error);
      res.status(500).json({ error: 'Failed to create session' });
    }
  });

module.exports = router;