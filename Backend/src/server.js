const https = require('https');
const fs = require('fs');
const app = require('./app');

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);

});

const sslServer = https.createServer({
  key: fs.readFileSync('path/to/private.key'),
  cert: fs.readFileSync('path/to/certificate.crt')
}, app);

sslServer.listen(443, () => {
  console.log('Secure server running on port 443');
});