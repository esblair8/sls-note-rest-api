const connectToDatabase = require("./database");
const Note = require("./models/note");
const errorHandler = require("./callbacks/errorHandler");
const successHandler = require("./callbacks/successHandler");

module.exports.getAll = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDatabase().then(
    Note.find()
      .then(note => successHandler(callback, note))
      .catch(err => errorHandler(callback, err))
  );
};
