import { createServer } from 'http';

const server = createServer((_, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

const port = 3030;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
