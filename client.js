const handler = require("serve-handler");
const http = require("http");

const PORT = process.env.PORT || 1234;

const server = http.createServer((request, response) => {
  // You pass two more arguments for config and middleware
  // More details here: https://github.com/vercel/serve-handler#options
  return handler(request, response,
	  {
	public: "dist"
  });
});

server.listen(PORT, () => {
  console.log(`Frontend Server Running at http://localhost:${PORT}`);
});
