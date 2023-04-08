import { app } from '.';

const port = process.env.PORT || 5000;
const host = 'localhost';

app.listen(port, () =>
  console.log(`🚀 The HTTP Server is running on http://${host}:${port}`)
);
