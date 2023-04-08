import { env } from './env';
import { app } from '.';

const port = 5000;
const host = '127.0.0.1';

app
  .listen({ host, port })
  .then(() =>
    console.log(`🚀 The HTTP Server is running on http://${host}:${port}`)
  );
