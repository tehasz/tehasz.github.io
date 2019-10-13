//function created to replace the content
function replaceContent() {
	//declaring the variables
	var myRecipientName;
	var HostName;
	
	//setting the variable to the input field's id named recipientNameInput's value
	myRecipientName = document.getElementById("recipientNameInput").value;
	HostName = document.getElementById("hostNameInput").value;

	// log storage of variables show process in console
	console.log('Variable myRecipientName: ' + myRecipientName);
	console.log('Variable HostName: ' + HostName);
	
	//setting the HTML code in the span id recipientNamePlaceholder with the variable 
	document.getElementById("recipientNamePlaceholder").innerHTML = myRecipientName;
	document.getElementById("hostNamePlaceholder").innerHTML = HostName;
} 