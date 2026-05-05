const https = require('https');

https.get('https://picgo-long.oss-cn-guangzhou.aliyuncs.com/imgs/20260506004004088.png', (res) => {
  let size = 0;
  res.on('data', chunk => size += chunk.length);
  res.on('end', () => console.log('Size:', size));
});
