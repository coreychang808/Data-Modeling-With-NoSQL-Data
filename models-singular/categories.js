'use strict';

// Where is our schema defined?
// How do we get it in here so we can run methods on it?
const mongooseModel = require ('./categories-schema');

class Categories {

  constructor() {
  }

  get(_id) {
    // Call the appropriate mongoose method to get
    // one or more records
    // If 1, return it as a plain object
    // If 2, return it as an object like this:
    // { count: ##, results: [{}, {}] }
    if(_id){
      return mongooseModel.findOne({_id});
    }
    return mongooseModel.find({});
  }

  create(record) {
    // Call the appropriate mongoose method to create a new record
    const newRecord = new mongooseModel(record);
    return newRecord.save();
  }

  update(_id, record) {
    // Call the appropriate mongoose method to update a record
    return mongooseModel.findByIdAndUpdate(_id,record, {new: true});
  }

  delete(_id) {
    // Call the appropriate mongoose method to delete a record
    return mongooseModel.findByIdAndDelete(_id);
  }

}

module.exports = Categories;
