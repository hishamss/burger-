$("#addburger").on("submit", function (event) {
  event.preventDefault();
  var postobj = {
    newburger: $("#newburger").val().trim(),
  };
  $.ajax("/api/burger", {
    type: "POST",
    data: postobj,
  }).then(function (data) {
    location.reload();
  });
});
$(".devour").on("click", function () {
  var id = $(this).data("id");
  var BurgerName = $("#" + id + "> p").text();
  $.ajax("/api/burger/" + id, {
    type: "PUT",
  }).then(function () {
    console.log("updated");
    $("#" + id).remove();
    $("#devourDiv").append("<li>" + BurgerName + "</li>");
  });
});

$(".remove").on("click", function () {
  var id = $(this).data("id");
  $.ajax("/api/burger/" + id, {
    type: "DELETE",
  }).then(function () {
    console.log("Deleted");
    $("#" + id).remove();
  });
});
