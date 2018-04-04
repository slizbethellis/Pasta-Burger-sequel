$(function() {
  $(".eat-burger").on("submit", function(event) {
    event.preventDefault();
    var id = $("#nom-update").data("id");
    var customer = $("#customer-input").val().trim();
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: {
          customer_name: customer,
          BurgerId: id
        }
      }).then(
        function() {
        // Reload the page to get the updated list
        location.reload();
        }
      );
    //);
  });

  $(".create-burger").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurg = {
      burger_name: $("#burg").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurg
    }).then(
      function() {
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
