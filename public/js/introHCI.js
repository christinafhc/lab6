'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.project a').click(addProjectDetails);

	$('#colorBtn').click(randomizeColors);
}

/*
 * Make an AJAX call to retrieve project details and add it in
 */
function addProjectDetails(e) {
	// Prevent following the link
	e.preventDefault();
    var projectID = $(this).closest('.project').attr('id');
	// get rid of 'project' from the front of the id 'project3'
	var idNumber = projectID.substr('project'.length);
	
	var url = "/project/" + idNumber;
	
	console.log(url)
	$.get(url, function(result)
	{
		console.log(result);
		var insertString = "<img class='detailsImage' src='"+result.image+"'></img><p>"+result.title+"</p><p>"+result.date+"</p><p>"+result.summary+"</p>"
		$('#details'+projectID).html(insertString);
	});

	console.log("User clicked on project " + idNumber);
}


function randomizeColors(e) {
	$.get('/palette', function(result){
		console.log(result)
		var colors = result.colors.hex;
		$('body').css('background-color', colors[0]);
		$('.thumbnail').css('background-color', colors[1]);
		$('h1, h2, h3, h4, h5, h5').css('color', colors[2]);
		$('p').css('color', colors[3]);
		$('.project img').css('opacity', .75);
	})
	
	console.log("User clicked on color button");
}
