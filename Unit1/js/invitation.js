//function created to replace the content
function replaceContent() {
	//declaring the variables
	var myRecipientName;
	var HostName
	
	//setting the variable to the input field's id named recipientNameInput's value
	myRecipientName = document.getElementById("recipientNameInput").value;
	HostName = document.getElementById("hostNameInput").value;
	
	console.log('Variable myRecipientName: ' + myRecipientName);
	
	//setting the HTML code in the span id recipientNamePlaceholder with the variable 
	document.getElementById("recipientNamePlaceholder").innerHTML = myRecipientName;
	document.getElementById("hostNamePlaceholder").innerHTML = HostName;
} 