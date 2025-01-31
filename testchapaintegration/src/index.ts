const api_key: string = 'CHASECK_TEST-qQ5Fgc00YrvBmx1kMJc7f1tUmbvRfPvh';
import { Chapa } from 'chapa-nodejs';

const chapa = new Chapa({
  secretKey: api_key,
});
try {
  const tx_ref = await chapa.genTxRef({
    removePrefix: false,
    prefix: 'TX',
    size: 20,
  });

  const response = await chapa.initialize({
    first_name: 'John',
    last_name: 'Doe',
    email: 'john@gmail.com',
    phone_number: '0911121314',
    currency: 'ETB',
    amount: '200',
    tx_ref: tx_ref,
    callback_url: 'https://example.com/',
    return_url: 'https://example.com/',
    customization: {
      title: 'Test Title',
      description: 'Test Description',
    },
  });

  console.log(response);
} catch (error) {
  console.error('Error initializing Chapa:', error);
}
