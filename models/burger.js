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

  update: function( condition, cb){
    orm.updateOne("burgers", "devoured", true, "id", condition, cb); 
  },

  remove: function(condition, cb){
    console.log(condition)
    orm.removeFromTable('burgers', condition, (res)=>{

      cb(res)
    });
  }
};


//export this code

module.exports = burgers;
