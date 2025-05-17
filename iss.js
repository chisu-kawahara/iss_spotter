const fetchMyIP = function(callback) {
  const url = 'https://api.ipify.org?format=json';
  needle.get(url, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    if (response.statusCode !== 200) {
      callback(Error(`Status Code ${response.statusCode} when fetching IP. Response: ${body}`), null);
      return;
    }
    callback(null, body.ip);
  });
};