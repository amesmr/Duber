$(document).ready(function() {

    if (sessionStorage.length === 0) {
        $.get("/loggedIn", function(data) {
            if (data.loggedIn) {
                console.log(data);
                sessionStorage.userEmail = data.uniqueID[0];
                sessionStorage.role = data.uniqueID[1];
                sessionStorage.userID = data.uniqueID[2];
                sessionStorage.username = data.uniqueID[3];
                console.log(sessionStorage);
            }
        });
    }

    // Tournament buttons functionality
    // Edit button shows all edit buttons
    $("#animalsList").on("click", ".animalData>.edit", function(event) {
        event.preventDefault();
        // Enable edit and remove non-editable css class
        $(this).parent().find(".editBoxes").attr('disabled', false).removeClass("non-editable");
        console.log("Edit enabled");
        // Get values from fields
        // var date = $(this).parent().find(".tournamentDate").val();
        // var time = $(this).parent().find(".tournamentTime").val();
        // console.log(moment(date, "ll").format("YYYY MM DD"));
        // Hide the edit button
        $(this).hide();
        // Toggle display of Update, Delete and Undo edit buttons
        $(this).parent().find(".editButtons").toggleClass("hidden");
    });


    // Undo Edit button hides edit buttons and shows Edit button
    $("#animalsList").on("click", ".animalData>.undoEditClick", function(event) {
        event.preventDefault();
        console.log("Undo edit");
        var buttonObject = $(this);
        // Calling function to change input textbox editable to non-editable and disabled


    });


    // UPDATE BUTTON TO MODIFY Animal DB DATA
    // On click of Update button,
    $("#animalsList").on("click", ".animalData>.update", function(event) {
        event.preventDefault();

        // Get val() from each of the textboxes,
        var animal_name = $(this).parent().find(".animalName").val();
        var animal_date = $(this).parent().find(".animalDate").val();
        var animal_time = $(this).parent().find(".animalTime").val();
        console.log(animal_name);
        // Get animalId from the parent div of the button clicked
        var animal_id = $(this).parent().attr("id");

        var animalObject = {
            AnimalId: animal_id,
            AnimalName: animal_name,
            AnimalDate: animal_date,
            AnimalTime: animal_time
        };

        var buttonObject = $(this);

        // Fire an ajax put/post /update/animal
        $.ajax({
                method: "PUT",
                url: "/update/animal",
                data: animalObject
            })
            .success(function(data) {
                console.log(data);
                console.log("animal updated");
            })
            /////// Configure error/fail condition, on db crash (display 500 error page from api-routes). This only works if server crashes. /////
            .fail(function(err) {
                console.log(err);
                buttonObject.parent().append("<p> Update failed. Please try again.</p>");
            });
    });

    // DELETE BUTTON TO "DELETE" ANIMAL FROM DB
    // On click of Delete button,
    $("#animalsList").on("click", ".animalData>.delete", function(event) {
        event.preventDefault();

        // Get val() from each of the textboxes,
        var animal_name = $(this).parent().find(".animalName").val();
        var animal_date = $(this).parent().find(".animalDate").val();
        console.log(animal_name);
        // Get animalId from the parent div of the button clicked
        var animal_id = $(this).parent().attr("id");
        console.log(animal_id);

        var animalObject = {
            animalId: animal_id,
            animalName: animal_name,
            animalDate: animal_date,
            animalTime: animal_time
        };

        var buttonObject = $(this);


    });


    $("#logoutButton").on("click", function() {
        sessionStorage.clear();
    });


    $(".non-editable").attr('disabled', true);
});


$("#loginForm").on("submit", function(data) {
    event.preventDefault();
    $.ajax({
        url: $('#loginForm').attr('action'),
        type: "post",
        data: $('#loginForm').serialize(),
        success: function(response) {
            console.log("Success!");
            window.location = response.redirect;
        },
        error: function(error) {
            console.log("Failure");
            console.log(error);
        }
    });

});