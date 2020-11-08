$(function () {
    $(".devour").on("click", function (event) {
      const id = $(this).data("id");
      const status = $(this).data("status");
  
      const newDevourStatus = {
        devoured: status,
      };
      console.log(newDevourStatus);
  
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevourStatus,
      }).then(function () {
        console.log("changed devour status to ", status);
        location.reload();
      });
    });
  
    $(".create-form").on("submit", function (event) {
      event.preventDefault();
  
      const newBurger = {
        name: $("#ca").val().trim(),
      };
  
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger,
      }).then(function () {
        console.log("created new burger");
        location.reload();
      });
    });
  });

