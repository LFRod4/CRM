"use strict";

const connectToDatabase = require("./db");
const Lead = require("./leads.model.js");

require("dotenv").config({ path: "./variables.env" });

module.exports.create = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDatabase().then(() => {
    Lead.create(JSON.parse(event.body))
      .then((lead) =>
        callback(null, {
          statusCode: 200,
          body: JSON.stringify(lead),
        })
      )
      .catch((err) =>
        callback(null, {
          statusCode: err.statusCode || 500,
          headers: { "Content-Type": "text/plain" },
          body: "Could not create the lead.",
        })
      );
  });
};

module.exports.getOne = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDatabase().then(() => {
    Lead.findById(event.pathParameters.id)
      .then((lead) =>
        callback(null, {
          statusCode: 200,
          body: JSON.stringify(lead),
        })
      )
      .catch((err) =>
        callback(null, {
          statusCode: err.statusCode || 500,
          headers: { "Content-Type": "text/plain" },
          body: "Could not fetch the lead.",
        })
      );
  });
};

module.exports.getAll = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDatabase().then(() => {
    Lead.find()
      .then((leads) =>
        callback(null, {
          statusCode: 200,
          body: JSON.stringify(leads),
        })
      )
      .catch((err) =>
        callback(null, {
          statusCode: err.statusCode || 500,
          headers: { "Content-Type": "text/plain" },
          body: "Could not fetch the leads.",
        })
      );
  });
};

module.exports.update = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDatabase().then(() => {
    Lead.findByIdAndUpdate(event.pathParameters.id, JSON.parse(event.body), {
      new: true,
    })
      .then((lead) =>
        callback(null, {
          statusCode: 200,
          body: JSON.stringify(lead),
        })
      )
      .catch((err) =>
        callback(null, {
          statusCode: err.statusCode || 500,
          headers: { "Content-Type": "text/plain" },
          body: "Could not fetch the leads.",
        })
      );
  });
};

module.exports.delete = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDatabase().then(() => {
    Lead.findByIdAndRemove(event.pathParameters.id)
      .then((lead) =>
        callback(null, {
          statusCode: 200,
          body: JSON.stringify({
            message: "Removed lead with id: " + lead._id,
            lead: lead,
          }),
        })
      )
      .catch((err) =>
        callback(null, {
          statusCode: err.statusCode || 500,
          headers: { "Content-Type": "text/plain" },
          body: "Could not fetch the leads.",
        })
      );
  });
};
