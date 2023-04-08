import { env } from './env';
import { app } from '.';

const port = 5000;
const host = '192.168.1.6';

app.listen(port, () =>
  console.log(`🚀 The HTTP Server is running on http://${host}:${port}`)
);
