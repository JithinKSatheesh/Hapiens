// trigger COMPANY

$('#nav_primary_comp').on("mouseenter",function(){
	$('#nav_list').removeClass('nav_list_active');
	$('#nav_links_a').removeClass('nav_list_active');
	$('#nav_links_b').addClass('nav_list_active');
	$('#nav_primary_comp').addClass('nav_primary_hover');
	$('#nav_primary_car').removeClass('nav_primary_hover');

});

// trigger CAREER

$('#nav_primary_car').on("mouseenter",function(){
	$('#nav_list').removeClass('nav_list_active');
	$('#nav_links_b').removeClass('nav_list_active');
	$('#nav_links_a').addClass('nav_list_active');
	$('#nav_primary_car').addClass('nav_primary_hover');
	$('#nav_primary_comp').removeClass('nav_primary_hover');

});


// ==========================================================
// trigger when inside the list

$('#nav_list').on("mouseenter",function(){
	$('#nav_list').removeClass('nav_list_active');
}).on("mouseleave",function(){
	$('#nav_list').addClass('nav_list_active');
	$('#nav_links_a').addClass('nav_list_active');
	$('#nav_links_b').addClass('nav_list_active');
	$('#nav_primary_comp').removeClass('nav_primary_hover');
	$('#nav_primary_car').removeClass('nav_primary_hover');
});

// ==================================================================



$(window).resize(function() {

  if ($(this).width() < 600) {

   $('.dots').addClass('nav_list_active');

  } else {

  $('.dots').removeClass('nav_list_active');
    }

});
