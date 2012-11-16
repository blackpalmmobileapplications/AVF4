
    
    document.addEventListener("deviceready", onDeviceReady, false);

    
    function onDeviceReady() {
    
    }


	function onSuccess(contacts) {
	    var html = '<label style="color:red" >Found ' + contacts.length + ' contacts.</label>';
	    for(i=0;i<contacts.length;i++)
	    {
	    	html += "<div class='btn'>";
	    	html += contacts[i].name.formatted;
	    	html += "</div>";
	    }
	    document.getElementById("contacts").innerHTML = html;
	};
	
	function onError(contactError) {
	    alert('onError!');
	};

	function getContacts()
	{
		var q = document.getElementById("q").value;
		var options = new ContactFindOptions();
		options.filter=q;
		options.multiple=true; 
		var fields = ["displayName", "name"];
		navigator.contacts.find(fields, onSuccess, onError, options);
	}
		