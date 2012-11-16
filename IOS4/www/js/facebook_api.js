function getProfile(q)
	{
	
		$.getJSON("http://graph.facebook.com/"+ q +"&callback=?", function(data){
			$("#fbprofile").html("");
		
			if(data.error)
			{
				$("#fbprofile").html("<li>Not found or error getting information.s</li>");
				return;
			}
			
			
			$.each(data, function(key, value){
				var spanLeft = $("<span></span>");
				spanLeft.html(key+":&emsp;");
				
				var spanRight = $("<span></span>");
				spanRight.html(value);
				
				var li = $("<li class='btn' style='height:auto' ></li>");
				li.append(spanLeft);
				li.append(spanRight);
				
				$("#fbprofile").append(li);
			});
		
		});
	}