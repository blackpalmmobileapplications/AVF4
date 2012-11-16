
    document.addEventListener("deviceready", onDeviceReady, false);

    
    function onDeviceReady() {
    
    }

    
    function alertDismissed() {
    
    }

    
    function showAlert() {
        navigator.notification.alert(
            'You are the winner!',  
            function(){},         
            'Game Over',            
            'Ok'                  
        );
    }

	

	function onConfirm(buttonIndex) {
	    alert('You selected button ' + buttonIndex);
	}


	function showConfirm() {
	    navigator.notification.confirm(
	        'You are the winner!',  
	        onConfirm,              
	        'Game Over',            
	        'Restart,Exit'          
	    );
	}
	