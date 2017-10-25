$(document).ready(function () {

  // set the wrapper width and height to match the img size
  $('#wrapper').css({
    'width': $('#wrapper img').width(),
    'height': $('#wrapper img').height()
  })

  //tooltip direction
  var tooltipDirection;

  for (i = 0; i < $(".pin").length; i++) {
    // set tooltip direction type - up or down             
    if ($(".pin").eq(i).hasClass('pin-right')) {
      tooltipDirection = 'tooltip-down';
    } else {
      tooltipDirection = 'tooltip-up';
    }

    // append the tooltip
    $("#wrapper").append(
      "<div style='left:" 
      + $(".pin").eq(i).data('xpos') 
      + "px;top:" 
      + $(".pin").eq(i).data('ypos') 
      + "px' class='" 
      + tooltipDirection 
      + "'>\ <div class='custom-tooltip'>" 
      + $(".pin").eq(i).html() 
      + "</div>\ </div>");
  }

  // show/hide the tooltip
  $('.tooltip-up, .tooltip-down').mouseenter(function () {
    $(this).children('.custom-tooltip').fadeIn(100);
  }).mouseleave(function () {
    $(this).children('.custom-tooltip').fadeOut(100);
  })
});