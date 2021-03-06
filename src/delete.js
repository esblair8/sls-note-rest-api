const connectToDatabase = require('./database');
const Note = require('./models/note');
const errorHandler = require("./callbacks/errorHandler");
const successHandler = require("./callbacks/successHandler");

module.exports.delete = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDatabase().then(() => {
    Note.findByIdAndRemove(event.pathParameters.id)
    .then(note => successHandler(callback, note))
    .catch(err => errorHandler(callback, err));
  });
};
