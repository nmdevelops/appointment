$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var userFirstNameInput = $("input#userFirstName").val();
    var userLastNameInput = $("input#userLastName").val();
    var userEmailInput = $("input#userEmail").val();
    var userTelInput = $("input#userTel").val();
    var appointmentDateInput = $("input#appointmentDate").val();
    var appointmentStartTimeInput = $("select#appointmentStartTime").val();
    var appointmentEndTimeInput = $("select#appointmentEndTime").val();




    $(".userFirstName").text(userFirstNameInput);
    $(".userLastName").text(userLastNameInput);
    $(".userEmail").text(userEmailInput);
    $(".userTel").text(userTelInput);
    $(".appointmentDate").text(appointmentDateInput);
    $(".appointmentStartTime").text(appointmentStartTimeInput);
    $(".appointmentEndTime").text(appointmentEndTimeInput);


    $("#confirmation").show();
    $("#emptyForm").hide();
    event.preventDefault();

  });
});
