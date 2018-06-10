$(document).ready(function() {
$(function() {
    $('#contact-form').submit(function(e) {
      e.preventDefault();
      $(this).attr(
        'action',
        'mailto:cidcarr.gy@gmail.com?subject=Jeannette Chambliss Digital Portfolio');
      console.log($(this)[0].action);
      return true;
    });
  });
});