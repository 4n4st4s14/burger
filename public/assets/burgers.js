//wait to attach handlers until the DOM has loaded!

$(function(){
  $(".devoured").on("click", function(event){
    var id= $(this).data("id");
    var devoured = $(this).data("devoured");

    var devouredState = {
      isDevoured : devoured
    };

    //send to PUT request in js, controller
    $.ajax("/api/burgers" + id, {
      type: "PUT",
      data: devouredState
    }).then(
      function(){
        console.log("changed devoured state", devoured);

        //reload the page to update it
        location.reload();
      }
    );
  });


  $(".create").on("submit", function(event){

    event.preventDefault();

    var newBurger = {
      name: $("#burg").val().trim(),
      devoured: false
    };

    //send to post
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function(){
        console.log("new burger!");

        location.reload();
      }
    );
  });
});
