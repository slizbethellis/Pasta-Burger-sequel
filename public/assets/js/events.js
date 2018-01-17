$(function() {
  $(".eat-burger").on("submit", function(event) {
    var id = $("#nom-update").data("id");
    var customer = $("#customer-input").val().trim();
    var newCust = {
      customer_name: customer
    };
    
    // Send the PUT request.
    //$.ajax("/api/customers/", {
    //  type: "POST",
    //  data: newCust
    //}).then(
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
