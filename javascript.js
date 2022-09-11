//function for calculating the rate/cost
$(".rate-btn").on("click", function () {
  var hrs = $("#rate").val();
  var cost_per_hr = 2300; //rupees
  var cost = hrs * cost_per_hr;
  
  $("#cost-estimation p").html("The project will take " + hrs + " hrs to complete. Total cost will be " + cost + " PKR approx.");
});
