import express from 'express';
import { json } from 'body-parser';
const app = express();
app.use(json());

app.get('/api/users/currentUser', (req, res) => {
  res.send('hi there');
});
app.listen(3030, () => {
  console.log('Auth service running on port 3030');
});
