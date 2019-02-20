module.exports = (callback, err) => {
  callback(null, {
    statusCode: err.statusCode || 500,
    headers: { "Content-Type": "text/plain" },
    body: "Could not fetch the notes."
  });
};
