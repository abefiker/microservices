import express from 'express';
import { Chapa } from 'chapa-nodejs';
const app = express();

const chapa = new Chapa({
  secretKey: 'CHASECK_TEST-qQ5Fgc00YrvBmx1kMJc7f1tUmbvRfPvh',
});

app.get('/initialize-payment', async (req, res) => {
  try {
    const tx_ref = await chapa.genTxRef();
    // const response = await chapa.initialize({
    //   first_name: 'John',
    //   last_name: 'Doe',
    //   email: 'john@gmail.com',
    //   phone_number: '0911121314',
    //   currency: 'ETB',
    //   amount: '200',
    //   tx_ref: tx_ref,
    //   callback_url: 'https://developer.chapa.co/test/',
    //   return_url: 'https://developer.chapa.co/test/',
    //   customization: {
    //     title: 'Test Title',
    //     description: 'Test Description',
    //   },
    // });
    const response = await chapa.verify({
      tx_ref: tx_ref,
    });
    res.json(response);
  } catch (error) {
    res.status(500).send('Error initializing payment');
  }
});

app.listen(3001, () => console.log('Server running on http://localhost:3001'));
