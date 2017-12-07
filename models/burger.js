var orm = require("../config/orm.js");

//code to call the orm functions using burger specific input
var burgers = {
  all: function(cb){
    orm.selectAll("burgers", function(res){
      cb(res);
    });
  },

  create: function(cols, vals, cb){
    orm.insertOne("burgers", cols, vals, function(res){
      cb(res);
    });
  },

  update: function(vals, condition, cb){
    orm.updateOne("burgers", vals, condition, function(res){
      cb(res);
    });
  }
};


//export this code

module.exports = burgers;
