var $ = function (id) { return document.getElementById(id); };

var volunteerArray = [];

var displayVolunteers = function () {
    // display the volunteers in the text area

// create array to store numbering values
    var volunteerOut = [];
// for loop to loop through array
    for (i = 0; i < volunteerArray.length; i++) {

// fill new array with string value of index plus one along with the data from the input array
        volunteerOut.push((i + 1).toString() + " - " + volunteerArray[i]);

    }
// display string value of # - first and last name
    $("volunteerList").value = volunteerOut.join("\n");


};

var addVolunteer = function () {
    // get the data from the form
    var volunteerString = $("first_name").value + " " + $("last_name").value;

    // store the data in an array
    volunteerArray.push(volunteerString);
    
    // display the volunteers and clear the add form
    displayVolunteers();
    
    // get the add form ready for next entry
    $("first_name").value = "";
    $("last_name").value = "";
    $("first_name").focus();
};


var deleteVolunteer = function () {
    // get the data from the form (hint: use the same format as from the add).
// variable to take the name entries from html
    var deleteName = $("first_name").value + " " + $("last_name").value;


    // loop to go through array and look for match between new delete name variable and array data
    for (i = 0; i < volunteerArray.length; i++) {
       // if equals then delete the data
        if (volunteerArray[i] == deleteName) {
            volunteerArray.splice(i, 1);
        }
    }


    // display the volunteers and clear the add form
    displayVolunteers();

    // get the delete form ready for next entry
    $("first_name").value = "";
    $("last_name").value = "";
    $("first_name").focus();
};

var clearList = function () {   
    // delete the data from the arrays
    volunteerArray = [];
    
	//   alternative way to delete all of the data from the array
	//    volunteerArray.length = 0;
    
    // remove the volunteers data from the web page
    $("volunteerList").value = "";
    
    $("first_name").focus();
};

var sortList = function () {   
    // sort the scores
    volunteerArray.sort();
    
    // display the scores
    displayVolunteers();    
};

//When the page is fully loaded, the buttons will be mapped to the JavaScript functions
window.onload = function () {
    $("add_button").onclick = addVolunteer;
	$("delete_button").onclick = deleteVolunteer;
    $("clear_button").onclick = clearList;    
    $("sort_button").onclick = sortList;    
    $("first_name").focus();
};