module.exports = (callback, note) => {
  callback(null, {
    statusCode: 200,
    body: JSON.stringify(note)
  });
};
