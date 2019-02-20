const connectToDatabase = require('./database');
const Note = require('./models/note');
const errorHandler = require("./callbacks/errorHandler");
const successHandler = require("./callbacks/successHandler");

module.exports.update = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  const config = {
    new: true
  };
  
  connectToDatabase().then(() => {
    Note.findByIdAndUpdate(
      event.pathParameters.id,
      JSON.parse(event.body),
      config)
      .then(note => successHandler(callback, note))
      .catch(err => errorHandler(callback, err));
  });
};
